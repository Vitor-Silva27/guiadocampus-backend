import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { CreateProcedureDto } from "./dto/create-procedure.dto";
import { UpdateProcedureDto } from "./dto/update-procedure.dto";
import { IProcedureRepository } from "./repositories/IProcedureRepository";
import { Procedure } from "./entities/procedure.entity";

@Injectable()
export class ProceduresService {
	constructor(
		@Inject("RepositoryGateway")
		private repository: IProcedureRepository,
	) {}

	async create(createProcedureDto: CreateProcedureDto): Promise<Procedure> {
		if (!createProcedureDto.title) {
			throw new BadRequestException("Title cannot be empty!");
		}

		return this.repository.create(createProcedureDto);
	}

	async findAll(): Promise<Procedure[]> {
		return this.repository.findAll();
	}

	async findOne(id: string): Promise<Procedure> {
		if (!id) {
			throw new BadRequestException("Invalid id!");
		}

		const procedure = await this.repository.findOne(id);

		return procedure;
	}

	async update(
		id: string,
		updateProcedureDto: UpdateProcedureDto,
	): Promise<Procedure> {
		if (!id) {
			throw new BadRequestException("Invalid id!");
		}

		return this.repository.update(id, updateProcedureDto);
	}

	async findBySector(sectorId: string): Promise<Procedure[]> {
		return await this.repository.findBySector(sectorId);
	}

	async remove(id: string): Promise<Procedure> {
		if (!id) {
			throw new BadRequestException("Invalid id!");
		}

		return this.repository.delete(id);
	}
}
