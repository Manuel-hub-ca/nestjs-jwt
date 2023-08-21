import { Controller, Get, Req, Res } from '@nestjs/common';
import { UserServices } from './user.service';
import { Request, Response } from 'express';

@Controller('/users')
export class UsersController {
  constructor(private readonly userServices: UserServices) {}

  @Get()
  async getAllUsers(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const result = await this.userServices.getAllUsers();
      return response.status(200).json({
        status: 'ok!',
        message: 'Data fetched successfuly',
        result: result,
      });
    } catch (err) {
      response.status(500).json({
        status: 'Not ok',
        message: 'Server error',
      });
    }
  }
}
