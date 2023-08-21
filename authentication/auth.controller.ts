import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginDto } from './dto/login-user.dto';
import { RegisterUsersDto } from './dto/register-user.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(
    @Req() request: Request,
    @Res() response: Response,
    @Body() loginDto: LoginDto,
  ): Promise<any> {
    try {
      const result = await this.authService.Login(loginDto);
      return response.status(200).json({
        status: 'ok!',
        message: 'Succesfully Login',
        result: result,
      });
    } catch (err) {
      response.status(500).json({
        status: 'not ok',
        message: 'Server error',
      });
    }
  }

  @Post('/register')
  async register(
    @Req() request: Request,
    @Res() response: Response,
    @Body() regsiterDto: RegisterUsersDto,
  ): Promise<any> {
    try {
      const result = await this.authService.register(regsiterDto);
      console.log(result);
      return response.status(200).json({
        status: 'ok!',
        message: 'Succesfully created User',
        result: result,
      });
    } catch (err) {
      response.status(500).json({
        status: 'hey man',
        message: 'Server error',
      });
    }
  }
}
