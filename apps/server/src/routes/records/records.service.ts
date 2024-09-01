import { PrismaService } from "@/prisma";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";

@Injectable()
export class RecordsService {
  constructor(private prisma: PrismaService) {}

  find = async () => {
    const records = await this.prisma.serviceRecord.findMany();
    return records;
  };

  findOne = async (id: string) => {
    const record = this.prisma.serviceRecord.findUnique({
      where: {
        id,
      },
    });

    if (!record) {
      throw new NotFoundException("Servis kaydı bulunamadı.");
    }

    return record;
  };

  search = async (query: string) => {
    const records = await this.prisma.serviceRecord.findMany({
      where: {
        OR: [
          {
            userId: {
              contains: query,
            },
          },
        ],
      },
    });

    return records;
  };

  create = async (data: Prisma.ServiceRecordCreateInput) => {
    return this.prisma.serviceRecord.create({
      data,
    });
  };

  update = async (id: string, data: Prisma.ServiceRecordUpdateInput) => {
    const isExist = await this.prisma.serviceRecord.findUnique({
      where: {
        id,
      },
    });

    if (!isExist) {
      throw new NotFoundException("Servis kaydı bulunamadı.");
    }

    const record = await this.prisma.serviceRecord.update({
      where: {
        id,
      },
      data,
    });

    return record;
  };

  remove = async (id: string) => {
    const isExist = await this.prisma.serviceRecord.findUnique({
      where: {
        id,
      },
    });

    if (!isExist) {
      throw new NotFoundException("Servis kaydı bulunamadı.");
    }

    return this.prisma.serviceRecord.delete({
      where: {
        id,
      },
    });
  };
}
