import { Injectable } from "@nestjs/common";
import { IProcedureRepository } from "./IProcedureRepository";
import { PrismaService } from "src/database/prisma.service";
import { CreateProcedureDto } from "../dto/create-procedure.dto";
import { Procedure } from "../entities/procedure.entity";
import { UpdateProcedureDto } from "../dto/update-procedure.dto";

@Injectable()
export class ProcedurePrismaRepository implements IProcedureRepository {
	constructor(private prisma: PrismaService) {}

	async create(procedure: CreateProcedureDto): Promise<Procedure> {
		const newProcedure = await this.prisma.service.create({
			data: {
				title: procedure.title,
				description: procedure.description,
				sectors: {
					connect: procedure.sectorsId.map(sector => ({
						id: sector,
					})),
				},
			},
		});

		return newProcedure;
	}

	async update(id: string, data: UpdateProcedureDto): Promise<Procedure> {
		const Procedure = await this.prisma.service.update({
			where: {
				id,
			},
			data: {
				title: data.title,
				description: data.description,
				icon: data.icon,
			},
		});

		return Procedure;
	}

	async findAll(): Promise<Procedure[]> {
		return await this.prisma.service.findMany();
	}

	async findBySector(sectorId: string): Promise<Procedure[]> {
		return await this.prisma.service.findMany({
			where: {
				sectors: {
					some: {
						id: sectorId,
					},
				},
			},
		});
	}

	async findOne(id: string): Promise<Procedure> {
		return this.prisma.service.findUnique({
			where: {
				id: id,
			},
			include: {
				embeds: true,
			},
		});
	}

	async delete(id: string): Promise<Procedure> {
		return await this.prisma.service.delete({
			where: {
				id,
			},
		});
	}
}
