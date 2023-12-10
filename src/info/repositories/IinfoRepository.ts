import { CreateInfoDto } from "../dto/create-info.dto";
import { UpdateInfoDto } from "../dto/update-info.dto";
import { Info } from "../entities/info.entity";

export interface IinfoRepository {
	create(sector: CreateInfoDto): Promise<Info>;
	update(id: string, Info: UpdateInfoDto): Promise<Info>;
	findAll(): Promise<Info[]>;
	findOne(id: string): Promise<Info>;
	delete(id: string): Promise<Info>;
}
