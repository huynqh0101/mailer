import { Injectable } from '@nestjs/common';
import { MailService } from './../mail/mail.service';
import { User } from './../user/user.entity';

@Injectable()
export class AuthService {
  constructor(private mailService: MailService) {}

  async signUp(user: User) {
    const token = Math.floor(1000 + Math.random() * 9000).toString();
    console.log(token);
    await this.mailService.sendUserConfirmation(user, token);
  }
}
