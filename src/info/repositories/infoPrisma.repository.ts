import { PrismaService } from "src/database/prisma.service";
import { IinfoRepository } from "./IinfoRepository";
import { Injectable } from "@nestjs/common";
import { CreateInfoDto } from "../dto/create-info.dto";
import { Info } from "../entities/info.entity";
import { UpdateInfoDto } from "../dto/update-info.dto";

@Injectable()
export class InfoPrismaRepository implements IinfoRepository {
	constructor(private prisma: PrismaService) {}

	async create(info: CreateInfoDto): Promise<Info> {
		const newinfo = await this.prisma.info.create({
			data: {
				description: info.description,
				icon: info.icon,
				title: info.title,
				sectorId: info.sectorId,
			},
		});

		return newinfo;
	}

	async update(id: string, data: UpdateInfoDto): Promise<Info> {
		const info = await this.prisma.info.update({
			where: {
				id,
			},
			data,
		});

		return info;
	}

	async findAll(): Promise<Info[]> {
		return await this.prisma.info.findMany();
	}

	async findOne(id: string): Promise<Info> {
		return this.prisma.info.findUnique({
			where: {
				id: id,
			},
		});
	}

	async delete(id: string): Promise<Info> {
		return await this.prisma.info.delete({
			where: {
				id,
			},
		});
	}
}
