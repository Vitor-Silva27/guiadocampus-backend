import { Module } from "@nestjs/common";
import { InfoService } from "./info.service";
import { InfoController } from "./info.controller";
import { PrismaService } from "src/database/prisma.service";
import { InfoPrismaRepository } from "./repositories/infoPrisma.repository";

@Module({
	controllers: [InfoController],
	providers: [
		InfoService,
		PrismaService,
		InfoPrismaRepository,
		{
			provide: "RepositoryGateway",
			useExisting: InfoPrismaRepository,
		},
	],
})
export class InfoModule {}
