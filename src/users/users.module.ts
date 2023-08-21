import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserServices } from './user.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UserServices, PrismaService],
})
export class UsersModule {}
