import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { RecordsService } from "./records.service";
import { Prisma } from "@prisma/client";
import { AuthGuard, RolesGuard } from "@/guards";
import { Roles } from "@/decorators";
import { UserRole } from "@/enums";

@Controller("records")
export class RecordsController {
  constructor(private recordsService: RecordsService) {}

  @Get()
  find() {
    return this.recordsService.find();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.recordsService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles([UserRole.Admin])
  create(@Body() data: Prisma.ServiceRecordCreateInput) {
    return this.recordsService.create(data);
  }

  @Put(":id")
  @UseGuards(AuthGuard, RolesGuard)
  @Roles([UserRole.Admin])
  update(
    @Param("id") id: string,
    @Body() data: Prisma.ServiceRecordUpdateInput
  ) {
    return this.recordsService.update(id, data);
  }

  @Delete(":id")
  @UseGuards(AuthGuard, RolesGuard)
  @Roles([UserRole.Admin])
  remove(@Param("id") id: string) {
    return this.recordsService.remove(id);
  }
}
