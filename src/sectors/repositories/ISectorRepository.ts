import { CreateSectorDto } from "../dto/create-sector.dto";
import { UpdateSectorDto } from "../dto/update-sector.dto";
import { Sector } from "../entities/sector.entity";

export interface ISectorRepository {
	create(sector: CreateSectorDto): Promise<Sector>;
	update(sector: UpdateSectorDto): Promise<Sector>;
	findAll(): Promise<Sector[]>;
	findOne(id: string): Promise<Sector>;
	delete(id: string): Promise<Sector>;
	exists(identifier: string): Promise<boolean>;
}
