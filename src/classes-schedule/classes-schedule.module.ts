import { Module } from "@nestjs/common";
import { ClassesScheduleService } from "./classes-schedule.service";
import { ClassesScheduleController } from "./classes-schedule.controller";
import { PrismaService } from "src/database/prisma.service";
import { ClassesSchedulePrismaRepository } from "./repositories/classesSchedulePrisma.repository";

@Module({
	controllers: [ClassesScheduleController],
	providers: [
		ClassesScheduleService,
		PrismaService,
		ClassesSchedulePrismaRepository,
		{
			provide: "RepositoryGateway",
			useExisting: ClassesSchedulePrismaRepository,
		},
	],
})
export class ClassesScheduleModule {}
