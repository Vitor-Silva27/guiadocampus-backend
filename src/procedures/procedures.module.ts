import { Module } from "@nestjs/common";
import { ProceduresService } from "./procedures.service";
import { ProceduresController } from "./procedures.controller";
import { PrismaService } from "src/database/prisma.service";
import { ProcedurePrismaRepository } from "./repositories/proceduresPrisma.repository";

@Module({
	controllers: [ProceduresController],
	providers: [
		ProceduresService,
		PrismaService,
		ProcedurePrismaRepository,
		{
			provide: "RepositoryGateway",
			useExisting: ProcedurePrismaRepository,
		},
	],
})
export class ProceduresModule {}
