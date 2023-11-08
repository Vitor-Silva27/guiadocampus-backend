import { Injectable } from "@nestjs/common";
import { CreateSectorDto } from "../dto/create-sector.dto";
import { UpdateSectorDto } from "../dto/update-sector.dto";
import { ISectorRepository } from "../repositories/ISectorRepository";

@Injectable()
export class SectorsService {
	constructor(private repository: ISectorRepository) {}

	async create({ name, generalInfo, contacts, description }: CreateSectorDto) {
		if (!name) {
			throw new Error("Could not create a sector without a name!");
		}
		return this.repository.create({ name, generalInfo, contacts, description });
	}

	findAll() {
		return `This action returns all sectors`;
	}

	findOne(id: string) {
		return `This action returns a #${id} sector`;
	}

	update(id: string, updateSectorDto: UpdateSectorDto) {
		return `This action updates a #${id} sector`;
	}

	remove(id: string) {
		return `This action removes a #${id} sector`;
	}
}
