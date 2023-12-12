import { Module } from "@nestjs/common";
import { MapService } from "./map.service";
import { MapController } from "./map.controller";
import { MapPrismaRepository } from "./repositories/mapPrisma.repository";
import { PrismaService } from "src/database/prisma.service";

@Module({
	controllers: [MapController],
	providers: [
		MapService,
		PrismaService,
		MapPrismaRepository,
		{
			provide: "RepositoryGateway",
			useExisting: MapPrismaRepository,
		},
	],
})
export class MapModule {}
