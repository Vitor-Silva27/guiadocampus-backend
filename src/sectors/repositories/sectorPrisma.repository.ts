import { PrismaService } from "src/database/prisma.service";
import { CreateSectorDto } from "../dto/create-sector.dto";
import { UpdateSectorDto } from "../dto/update-sector.dto";
import { Sector } from "../entities/sector.entity";
import { ISectorRepository } from "./ISectorRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SectorPrismaRepository implements ISectorRepository {
	constructor(private prisma: PrismaService) {}

	async create(sector: CreateSectorDto): Promise<Sector> {
		const newSector = await this.prisma.sector.create({
			data: {
				name: sector.name,
				description: sector.description,
				infos: {
					createMany: {
						data: sector.generalInfo.map(info => ({
							title: info.title,
							description: info.description,
						})),
					},
				},
			},
		});

		return newSector;
	}

	async update(
		id: string,
		{ description, name }: UpdateSectorDto,
	): Promise<Sector> {
		const sector = await this.prisma.sector.update({
			where: {
				id,
			},
			data: {
				name,
				description,
			},
		});

		return sector;
	}

	async findAll(): Promise<Sector[]> {
		return await this.prisma.sector.findMany();
	}

	async findOne(id: string): Promise<Sector> {
		return this.prisma.sector.findUnique({
			where: {
				id: id,
			},
			include: {
				contacts: true,
				infos: {
					select: {
						title: true,
						description: true,
					},
				},
			},
		});
	}

	async delete(id: string): Promise<Sector> {
		return await this.prisma.sector.delete({
			where: {
				id,
			},
		});
	}

	async exists(identifier: string): Promise<boolean> {
		const exists = await this.prisma.sector.findFirst({
			where: {
				OR: [
					{
						id: identifier,
					},
					{
						name: identifier,
					},
				],
			},
		});

		return !!exists;
	}
}
