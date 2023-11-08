import { PrismaService } from "src/database/prisma.service";
import { CreateSectorDto } from "../dto/create-sector.dto";
import { UpdateSectorDto } from "../dto/update-sector.dto";
import { Sector } from "../entities/sector.entity";
import { ISectorRepository } from "./ISectorRepository";
import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class SectorPrismaRepository implements ISectorRepository {
	constructor(private prisma: PrismaService) {}

	async create(sector: CreateSectorDto): Promise<Sector> {
		if (await this.exists(sector.name)) {
			throw new BadRequestException(
				"Could not create a sector that already exists!",
			);
		}

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

	update(sector: UpdateSectorDto): Promise<Sector> {
		throw new Error("Method not implemented.");
	}
	async findAll(): Promise<Sector[]> {
		return await this.prisma.sector.findMany();
	}
	findOne(id: string): Promise<Sector> {
		throw new Error("Method not implemented.");
	}
	delete(id: string): Promise<Sector> {
		throw new Error("Method not implemented.");
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
