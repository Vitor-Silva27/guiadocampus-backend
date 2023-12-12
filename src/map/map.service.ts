import {
	BadRequestException,
	Inject,
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { CreateMapDto } from "./dto/create-map.dto";
import { UpdateMapDto } from "./dto/update-map.dto";
import { IMapRepository } from "./repositories/IMapRepository";

@Injectable()
export class MapService {
	constructor(
		@Inject("RepositoryGateway")
		private repository: IMapRepository,
	) {}

	async create(createMapDto: CreateMapDto) {
		if (!createMapDto.fileId) {
			throw new BadRequestException("File ID cannot be empty!");
		}

		return this.repository.create(createMapDto);
	}

	async findAll() {
		return await this.repository.findAll();
	}

	async findOne(id: string) {
		if (!id) {
			throw new BadRequestException("Invalid ID!");
		}

		const map = await this.repository.findOne(id);

		if (!map) {
			throw new NotFoundException("Map does not exist!");
		}

		return map;
	}

	async update(id: string, updateMapDto: UpdateMapDto) {
		if (!id) {
			throw new BadRequestException("Invalid ID!");
		}

		return await this.repository.update(id, updateMapDto);
	}

	async remove(id: string) {
		if (!id) {
			throw new BadRequestException("Invalid ID!");
		}

		const map = await this.repository.delete(id);

		if (!map) {
			throw new NotFoundException("Map does not exist!");
		}

		return map;
	}
}
