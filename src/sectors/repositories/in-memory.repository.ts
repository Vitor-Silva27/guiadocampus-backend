import { Injectable } from "@nestjs/common";
import { CreateSectorDto } from "../dto/create-sector.dto";
import { UpdateSectorDto } from "../dto/update-sector.dto";
import { Sector } from "../entities/sector.entity";
import { ISectorRepository } from "./ISectorRepository";

@Injectable()
export class InMemoryRepository implements ISectorRepository {
	create(sector: CreateSectorDto): Promise<Sector> {
		throw new Error("Method not implemented.");
	}
	update(sector: UpdateSectorDto): Promise<Sector> {
		throw new Error("Method not implemented.");
	}
	findAll(): Promise<Sector[]> {
		throw new Error("Method not implemented.");
	}
	findOne(id: string): Promise<Sector> {
		throw new Error("Method not implemented.");
	}
	delete(id: string): Promise<Sector> {
		throw new Error("Method not implemented.");
	}
}
