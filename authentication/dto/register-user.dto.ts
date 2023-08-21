import { IsString, Length } from 'class-validator';

export class RegisterUsersDto {
  @IsString()
  @Length(0, 20)
  username: string;

  @IsString()
  @Length(0, 20)
  password: string;

  @IsString()
  @Length(0, 20)
  email: string;

  @IsString()
  @Length(0, 20)
  name: string;
}
