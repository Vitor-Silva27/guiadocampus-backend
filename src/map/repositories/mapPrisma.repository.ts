import { PrismaService } from "src/database/prisma.service";
import { IMapRepository } from "./IMapRepository";
import { Injectable } from "@nestjs/common";
import { CreateMapDto } from "../dto/create-map.dto";
import { Map } from "../entities/map.entity";
import { UpdateMapDto } from "../dto/update-map.dto";

@Injectable()
export class MapPrismaRepository implements IMapRepository {
	constructor(private prisma: PrismaService) {}

	async create({ fileId }: CreateMapDto): Promise<Map> {
		const newMap = await this.prisma.map.create({
			data: {
				embedId: fileId,
			},
		});

		return newMap;
	}

	async update(id: string, { fileId }: UpdateMapDto): Promise<Map> {
		const Map = await this.prisma.map.update({
			where: {
				id,
			},
			data: {
				embedId: fileId,
			},
		});

		return Map;
	}

	async findAll(): Promise<Map[]> {
		return await this.prisma.map.findMany({
			select: {
				id: true,
				embed: {
					select: {
						link: true,
					},
				},
			},
			orderBy: {
				updatedAt: "desc",
			},
		});
	}

	async findOne(id: string): Promise<Map> {
		return this.prisma.map.findFirst({
			where: {
				id: id,
			},
			include: {
				embed: {
					select: {
						link: true,
					},
				},
			},
		});
	}

	async delete(id: string): Promise<Map> {
		return await this.prisma.map.delete({
			where: {
				id,
			},
		});
	}
}
