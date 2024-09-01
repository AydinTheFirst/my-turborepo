import { MailerService } from "@nestjs-modules/mailer";
import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  constructor(private mailer: MailerService) {}

  @Get()
  index() {
    return {
      status: 200,
      message: "API is running",
    };
  }

  @Get("health")
  health() {
    this.mailer.sendMail({
      to: "aydinhalil980@gmail.com",
      subject: "Testing Nest MailerModule ✔", // Subject line
      text: "welcome", // plaintext body
      html: "<b>welcome</b>", // HTML body content
    });
    return {
      status: 200,
      message: "API is healthy",
    };
  }
}
