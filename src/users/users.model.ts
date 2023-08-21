import { Prisma } from '@prisma/client';
import { RegisterUsersDto } from '../../authentication/dto/register-user.dto';
import * as bcrypt from 'bcrypt';
export class User implements Prisma.UsersCreateInput {
  name: string;
  username: string;
  password: string;
  email: string;

  // constructor(createDto: RegisterUsersDto) {
  //   this.name = createDto.name;
  //   this.username = createDto.username;
  //   this.email = createDto.email;
  //   this.password = (async () => await bcrypt.hash(createDto.password, 10))();
  //   // this.password = createDto.password;
  // }

  constructor(createDto: RegisterUsersDto) {
    this.name = createDto.name;
    this.username = createDto.username;
    this.email = createDto.email;
    this.password = createDto.password;

    // Use a Promise to handle the asynchronous bcrypt.hash operation
    // (async () => {
    //   try {
    //     createDto.password = await bcrypt.hash(createDto.password, 10);
    //     console.log('Hashed password:', this.password);
    //   } catch (error) {
    //     // Handle any errors that occurred during the hashing process
    //     console.error('Error hashing password:', error);
    //   }
    // })();
    //   const passwordPromise = bcrypt.hash(createDto.password, 10);

    //   passwordPromise
    //     .then((hashedPassword) => {
    //       this.password = hashedPassword;
    //       console.log('Hashed password:', this.password);
    //     })
    //     .catch((error) => {
    //       // Handle any errors that occurred during the hashing process
    //       console.error('Error hashing password:', error);
    //     });
  }
}
