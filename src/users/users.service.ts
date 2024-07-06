import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: any): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username }).exec();
  }

  async findOneById(id: string): Promise<User | undefined> {
    return this.userModel.findById(id).exec();
  }
}
