import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma.service';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prismaSerice: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { username: string }) {
    const user = await this.prismaSerice.users.findUnique({
      where: { username: payload.username },
    });
    return user;
  }
}
