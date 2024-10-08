import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";

import { LoggerMiddleware, AuthMiddleware } from "@/middlewares";

import { PrismaModule } from "@/prisma";

import { AppController } from "./app.controller";

import { UsersModule } from "@/routes/users";
import { AuthModule } from "@/routes/auth";
import { TokensModule } from "@/routes/tokens";

import { MailerModule } from "@nestjs-modules/mailer";
import { mailerConfig } from "@/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60,
        limit: 10,
      },
    ]),
    MailerModule.forRoot(mailerConfig),
    PrismaModule,
    UsersModule,
    AuthModule,
    TokensModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, AuthMiddleware).forRoutes("*");
  }
}
