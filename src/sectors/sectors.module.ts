import { Module } from "@nestjs/common";
import { SectorsService } from "./service/sectors.service";
import { SectorsController } from "./controller/sectors.controller";
import { PrismaService } from "src/database/prisma.service";

@Module({
	controllers: [SectorsController],
	providers: [SectorsService, PrismaService],
})
export class SectorsModule {}
