import { MailModule } from './../mail/mail.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService],
  imports: [MailModule],
  controllers: [AuthController],
})
export class AuthModule {}
