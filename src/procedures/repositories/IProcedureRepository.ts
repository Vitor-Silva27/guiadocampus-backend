import { CreateProcedureDto } from "../dto/create-procedure.dto";
import { UpdateProcedureDto } from "../dto/update-procedure.dto";
import { Procedure } from "../entities/procedure.entity";

export interface IProcedureRepository {
	create(sector: CreateProcedureDto): Promise<Procedure>;
	update(id: string, sector: UpdateProcedureDto): Promise<Procedure>;
	findAll(): Promise<Procedure[]>;
	findOne(id: string): Promise<Procedure>;
	delete(id: string): Promise<Procedure>;
	findBySector(sectorId: string): Promise<Procedure[]>;
	search(query: string): Promise<Procedure[]>;
}
