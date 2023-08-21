import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UserServices } from 'src/users/user.service';
import { LoginDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { RegisterUsersDto } from './dto/register-user.dto';
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
    private readonly userServices: UserServices,
  ) {}

  async Login(loginDto: LoginDto): Promise<any> {
    const { username, password } = loginDto;

    const users = await this.prismaService.users.findUnique({
      where: { username },
    });

    if (!users) {
      throw new NotFoundException('user not found');
    }

    const validatePassword = await bcrypt.compare(password, users.password);

    if (!validatePassword) {
      throw new NotFoundException('invalid password');
    }

    return {
      token: this.jwtService.sign({ username }),
    };
  }

  async register(createDto: RegisterUsersDto) {
    console.log(createDto);
    createDto.password = await bcrypt.hash(createDto.password, 10);
    const newDtoUser = new User(createDto);
    console.log(newDtoUser);
    console.log('here');
    const newDbUser = await this.userServices.createUser(newDtoUser);
    console.log(newDbUser);
    return {
      tooken: this.jwtService.sign({ username: newDbUser.username }),
    };
  }
}
