import {
	BadRequestException,
	Inject,
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { CreateInfoDto } from "./dto/create-info.dto";
import { UpdateInfoDto } from "./dto/update-info.dto";
import { IinfoRepository } from "./repositories/IinfoRepository";

@Injectable()
export class InfoService {
	constructor(
		@Inject("RepositoryGateway")
		private repository: IinfoRepository,
	) {}

	async create(createInfoDto: CreateInfoDto) {
		if (!createInfoDto.title) {
			throw new BadRequestException("Title cannot be empty!");
		}

		return this.repository.create(createInfoDto);
	}

	async findAll() {
		return await this.repository.findAll();
	}

	async findOne(id: string) {
		if (!id) {
			throw new BadRequestException("Invalid ID!");
		}

		const info = await this.repository.findOne(id);

		if (!info) {
			throw new NotFoundException("Info does not exist!");
		}

		return info;
	}

	async update(id: string, updateInfoDto: UpdateInfoDto) {
		if (!id) {
			throw new BadRequestException("Invalid ID!");
		}

		return await this.repository.update(id, updateInfoDto);
	}

	async remove(id: string) {
		if (!id) {
			throw new BadRequestException("Invalid ID!");
		}

		return await this.repository.delete(id);
	}
}
