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

	async create(data: CreateSectorDto) {
		if (await this.exists(data.name)) {
			throw new BadRequestException(
				"Could not create a sector that already exists!",
			);
		}

		if (!data.name) {
			throw new BadRequestException(
				"Could not create a sector without a name!",
			);
		}

		return this.repository.create(data);
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
			throw new BadRequestException("invalid id!");
		}

		if (!(await this.exists(id))) {
			throw new NotFoundException("This sector does not exist!");
		}

		if (await this.exists(updateSectorDto.name)) {
			throw new BadRequestException(
				"Cannot have 2 sectors with the same name!",
			);
		}

		if (updateSectorDto.name === "") {
			throw new BadRequestException("Name cannot be empty!");
		}
		return await this.repository.update(id, updateSectorDto);
	}

	async remove(id: string) {
		if (!id) {
			throw new BadRequestException("invalid id!");
		}

		if (!(await this.exists(id))) {
			throw new NotFoundException("This sector does not exist!");
		}

		return await this.repository.delete(id);
	}

	async exists(id: string): Promise<boolean> {
		return this.repository.exists(id);
	}
}
