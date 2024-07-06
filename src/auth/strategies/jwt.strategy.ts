import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { User } from '../schema/users.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name) private adminModel: Model<User>,
    private configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('SECRET_KEY'),
    });
  }

  async validate(payload: any) {
    const admin = await this.adminModel.findById(payload.sub);
    if (!admin) {
      throw new UnauthorizedException();
    }
    return { userId: payload.sub, username: payload.username };
  }
}
