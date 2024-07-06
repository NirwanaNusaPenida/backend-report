import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/users.schema';
import { Model } from 'mongoose';

import * as bycrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string; user: User }> {
    const { email, password } = signUpDto;

    const hashedPassword = await bycrypt.hash(password, 10);

    const findEmail = await this.userModel.findOne({
      email,
    });

    if (findEmail) {
      throw new UnauthorizedException('Email already exists');
    }

    const user = await this.userModel.create({
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: user._id });

    user.password = undefined;

    return { token, user };
  }

  async login(loginDto: LoginDto): Promise<{ token: string; user: User }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatch = await bycrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id });
    user.password = undefined;

    return { token, user };
  }

  async updateProfile(user: User, updateDto: Partial<User>): Promise<User> {
    const res = await this.userModel.findByIdAndUpdate(
      user._id,
      { ...updateDto, updatedAt: new Date() },
      { new: true },
    );

    if (!res) {
      throw new UnauthorizedException('User not found');
    }

    res.password = undefined;

    return res;
  }
}
