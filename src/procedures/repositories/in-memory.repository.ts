import { Injectable } from "@nestjs/common";
import { IProcedureRepository } from "./IProcedureRepository";
import { Procedure } from "../entities/procedure.entity";
import { CreateProcedureDto } from "../dto/create-procedure.dto";
import { UpdateProcedureDto } from "../dto/update-procedure.dto";

@Injectable()
export class InMemoryRepository implements IProcedureRepository {
	private procedures: Procedure[] = [];

	async create(Procedure: CreateProcedureDto): Promise<Procedure> {
		const newProcedure = {
			...Procedure,
			id: "id" + (this.procedures.length + 1),
		};
		this.procedures.push(newProcedure);
		return newProcedure;
	}

	async update(id: string, data: UpdateProcedureDto): Promise<Procedure> {
		const index = this.procedures.findIndex(Procedure => Procedure.id === id);
		if (index === -1) {
			return null;
		}

		const updatedProcedure = { ...this.procedures[index], ...data };
		this.procedures[index] = updatedProcedure;
		return updatedProcedure;
	}

	async findAll(): Promise<Procedure[]> {
		return this.procedures;
	}

	async findOne(id: string): Promise<Procedure> {
		return this.procedures.find(Procedure => Procedure.id === id);
	}

	async delete(id: string): Promise<Procedure> {
		const index = this.procedures.findIndex(Procedure => Procedure.id === id);
		if (index === -1) {
			return null;
		}

		const deleted = this.procedures.splice(index, 1);
		return deleted[0];
	}
}
