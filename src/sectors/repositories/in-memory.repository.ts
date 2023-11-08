import { Injectable } from "@nestjs/common";
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

		this.sectors.push({
			id: "id" + this.sectors.length + 1,
			...newSector,
		});

		return newSector;
	}
	update(sector: UpdateSectorDto): Promise<Sector> {
		throw new Error("Method not implemented.");
	}
	async findAll(): Promise<Sector[]> {
		return this.sectors;
	}
	findOne(id: string): Promise<Sector> {
		throw new Error("Method not implemented.");
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
