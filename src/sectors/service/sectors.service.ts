import {
	BadRequestException,
	Inject,
	Injectable,
	NotFoundException,
} from "@nestjs/common";
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
		if (!id) {
			throw new BadRequestException("invalid id!");
		}

		const sector = await this.repository.findOne(id);

		if (!sector) {
			throw new NotFoundException("Sector not found!");
		}
		return sector;
	}

	async update(id: string, updateSectorDto: UpdateSectorDto) {
		if (!id) {
			throw new BadRequestException("id not provided!");
		}
		if (updateSectorDto.name === "") {
			throw new BadRequestException("Name cannot be empty!");
		}
		return await this.repository.update(id, updateSectorDto);
	}

	async remove(id: string) {
		return `This action removes a #${id} sector`;
	}
}
