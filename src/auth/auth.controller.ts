import { Body, Controller, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './schema/users.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body() signUpDto: SignUpDto,
  ): Promise<{ token: string; user: User }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  async login(
    @Body() loginDto: LoginDto,
  ): Promise<{ token: string; user: User }> {
    return this.authService.login(loginDto);
  }
}
