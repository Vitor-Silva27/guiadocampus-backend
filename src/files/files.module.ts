import { Module } from "@nestjs/common";
import { FilesService } from "./files.service";
import { FilesController } from "./files.controller";
import { PrismaService } from "src/database/prisma.service";
import { FilePrismaRepository } from "./repositories/filePrisma.repository";

@Module({
	controllers: [FilesController],
	providers: [
		FilesService,
		PrismaService,
		FilePrismaRepository,
		{
			provide: "RepositoryGateway",
			useExisting: FilePrismaRepository,
		},
	],
})
export class FilesModule {}
