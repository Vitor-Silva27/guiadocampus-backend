import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { IinfoRepository } from "./IinfoRepository";
import { Info } from "../entities/info.entity";
import { CreateInfoDto } from "../dto/create-info.dto";
import { UpdateInfoDto } from "../dto/update-info.dto";

@Injectable()
export class InMemoryRepository implements IinfoRepository {
	private infos: Info[] = [];

	async create(infoDto: CreateInfoDto): Promise<Info> {
		if (await this.exists(infoDto.title)) {
			throw new BadRequestException("Cannot have 2 infos with the same title!");
		}

		const newInfo = new Info(
			infoDto.title,
			infoDto.description,
			infoDto.icon,
			infoDto.sectorId,
		);

		const generatedId = "id" + (this.infos.length + 1);
		Object.assign(newInfo, { id: generatedId });

		this.infos.push(newInfo);

		return newInfo;
	}

	async update(id: string, infoDto: UpdateInfoDto): Promise<Info> {
		if (!(await this.exists(id))) {
			throw new NotFoundException("This Info does not exist!");
		}

		const existingInfo = await this.findOne(id);

		if (
			infoDto.title &&
			infoDto.title !== existingInfo.title &&
			(await this.exists(infoDto.title))
		) {
			throw new BadRequestException("Cannot have 2 infos with the same title!");
		}

		existingInfo.title = infoDto.title || existingInfo.title;
		existingInfo.description = infoDto.description || existingInfo.description;
		existingInfo.icon = infoDto.icon || existingInfo.icon;

		return existingInfo;
	}

	async findAll(): Promise<Info[]> {
		return this.infos;
	}

	async findOne(id: string): Promise<Info> {
		return this.infos.find(info => info.id === id);
	}

	async delete(id: string): Promise<Info> {
		if (!(await this.exists(id))) {
			throw new NotFoundException("This Info does not exist!");
		}

		const index = this.infos.findIndex(info => info.id === id);
		const deleted = this.infos.splice(index, 1);

		return deleted[0];
	}

	async exists(title: string): Promise<boolean> {
		return this.infos.some(info => info.title === title);
	}
}
