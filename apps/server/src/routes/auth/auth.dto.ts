import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

export class RegisterDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty({
    example: "test@example.com",
  })
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  displayName: string;
}
