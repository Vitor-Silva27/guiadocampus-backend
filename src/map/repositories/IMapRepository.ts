import { CreateMapDto } from "../dto/create-map.dto";
import { UpdateMapDto } from "../dto/update-map.dto";
import { Map } from "../entities/map.entity";

export interface IMapRepository {
	create(map: CreateMapDto): Promise<Map>;
	update(id: string, map: UpdateMapDto): Promise<Map>;
	findAll(): Promise<Map[]>;
	findOne(id: string): Promise<Map>;
	delete(id: string): Promise<Map>;
}
