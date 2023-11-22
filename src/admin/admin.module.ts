import { Module } from "@nestjs/common";
import { AdminService } from "./service/admin.service";
import { AdminController } from "./controller/admin.controller";
import { PrismaService } from "src/database/prisma.service";
import { AdminPrismaRepository } from "./repositories/adminPrisma.repository";

@Module({
	controllers: [AdminController],
	providers: [
		AdminService,
		PrismaService,
		AdminPrismaRepository,
		{
			provide: "RepositoryGateway",
			useExisting: AdminPrismaRepository,
		},
	],
})
export class AdminModule {}
