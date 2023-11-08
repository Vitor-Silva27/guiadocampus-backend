import { Module } from "@nestjs/common";
import { SectorsService } from "./service/sectors.service";
import { SectorsController } from "./controller/sectors.controller";
import { PrismaService } from "src/database/prisma.service";
import { SectorPrismaRepository } from "./repositories/sectorPrisma.repository";

@Module({
	controllers: [SectorsController],
	providers: [
		SectorsService,
		PrismaService,
		SectorPrismaRepository,
		{
			provide: "RepositoryGateway",
			useExisting: SectorPrismaRepository,
		},
	],
})
export class SectorsModule {}
