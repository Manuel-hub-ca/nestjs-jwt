// import { PrismaService } from 'src/prisma.service';
// import { User } from './users.model';

import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from './users.model';

@Injectable()
export class UserServices {
  constructor(private prismaServices: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    return await this.prismaServices.users.findMany();
  }

  async createUser(data: User): Promise<User> {
    const existing = await this.prismaServices.users.findUnique({
      where: {
        username: data.username,
      },
    });
    if (existing) {
      throw new ConflictException('username already exist');
    }

    return this.prismaServices.users.create({ data });
  }
}
