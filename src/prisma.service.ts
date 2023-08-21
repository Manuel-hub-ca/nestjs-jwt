// import { INestApplication, OnModuleInit } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';

import { INestApplication, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// export class PrismaService extends PrismaClient implements OnModuleInit {
//   async onModuleInit() {
//     await this.$connect();
//   }

//   async enableShustdownHooks(app: INestApplication) {
//     return this.$on('beforeExit', async () => await app.close());
//   }
// }

export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    return this.$on('beforeExit', async () => await app.close());
  }
}
