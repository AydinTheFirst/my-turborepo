import { IsString } from "class-validator";

export class CreateRecordDto {
  @IsString()
  userId: string;
}

export class UpdateRecordDto {
  @IsString()
  userId: string;
}
