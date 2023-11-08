import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { CreateSectorDto } from "../dto/create-sector.dto";
import { UpdateSectorDto } from "../dto/update-sector.dto";
import { Sector } from "../entities/sector.entity";
import { ISectorRepository } from "./ISectorRepository";

@Injectable()
export class InMemoryRepository implements ISectorRepository {
	private sectors: Sector[] = [];

	async create(sector: CreateSectorDto): Promise<Sector> {
		if (await this.exists(sector.name)) {
			throw new Error("Could not create a sector that already exists!");
		}

		const newSector = new Sector(
			sector.name,
			sector.description,
			sector.generalInfo,
		);

		const generatedId = "id" + (this.sectors.length + 1);

		Object.assign(newSector, { id: generatedId });

		this.sectors.push(newSector);

		return newSector;
	}
	async update(
		id: string,
		{ name, description }: UpdateSectorDto,
	): Promise<Sector> {
		if (!(await this.exists(id))) {
			throw new NotFoundException("This sector does not exist!");
		}

		if (await this.exists(name)) {
			throw new BadRequestException(
				"Cannot have 2 sectors with the same name!",
			);
		}

		const mySector = await this.findOne(id);
		mySector.name = name;
		mySector.description = description;
		return mySector;
	}

	async findAll(): Promise<Sector[]> {
		return this.sectors;
	}

	async findOne(id: string): Promise<Sector> {
		return this.sectors.find(sector => sector.id === id);
	}

	delete(id: string): Promise<Sector> {
		throw new Error("Method not implemented.");
	}

	async exists(identifier: string): Promise<boolean> {
		return this.sectors.some(
			sector => sector.id === identifier || sector.name === identifier,
		);
	}
}
