import { Injectable } from "@nestjs/common";
import { IFileRepository } from "./IFileRepository";
import { PrismaService } from "src/database/prisma.service";
import { CreateFileDto } from "../dto/create-file.dto";
import { File } from "../entities/file.entity";

@Injectable()
export class FilePrismaRepository implements IFileRepository {
	constructor(private prisma: PrismaService) {}

	async create(file: CreateFileDto): Promise<File> {
		const newFile = await this.prisma.embed.create({
			data: {
				title: file.title,
				link: file.link,
				icon: file.icon,
				sectorId: file.sectorId,
				serviceId: file.serviceId,
			},
		});

		return newFile;
	}
}
