import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { CreateSectorDto } from "../dto/create-sector.dto";
import { UpdateSectorDto } from "../dto/update-sector.dto";
import { ISectorRepository } from "../repositories/ISectorRepository";

@Injectable()
export class SectorsService {
	constructor(
		@Inject("RepositoryGateway")
		private repository: ISectorRepository,
	) {}

	async create({ name, generalInfo, description }: CreateSectorDto) {
		if (!name) {
			throw new BadRequestException(
				"Could not create a sector without a name!",
			);
		}
		return this.repository.create({ name, generalInfo, description });
	}

	async findAll() {
		return await this.repository.findAll();
	}

	async findOne(id: string) {
		return await this.repository.findOne(id);
	}

	update(id: string, updateSectorDto: UpdateSectorDto) {
		return `This action updates a #${id} sector`;
	}

	remove(id: string) {
		return `This action removes a #${id} sector`;
	}
}
