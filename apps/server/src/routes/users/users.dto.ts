import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsString()
  displayName: string;
}

export class UpdateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  displayName: string;
}
