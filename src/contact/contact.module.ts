import { Module } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { ContactController } from "./contact.controller";
import { ContactPrismaRepository } from "./repositories/contactPrisma.repository";
import { PrismaService } from "src/database/prisma.service";
import { SectorsModule } from "src/sectors/sectors.module";

@Module({
	controllers: [ContactController],
	providers: [
		ContactService,
		PrismaService,
		SectorsModule,
		ContactPrismaRepository,
		{
			provide: "RepositoryGateway",
			useExisting: ContactPrismaRepository,
		},
	],
})
export class ContactModule {}
