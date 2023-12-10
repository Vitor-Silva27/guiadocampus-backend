import { CreateFileDto } from "../dto/create-file.dto";
import { File } from "../entities/file.entity";

export interface IFileRepository {
	create(file: CreateFileDto): Promise<File>;
}
