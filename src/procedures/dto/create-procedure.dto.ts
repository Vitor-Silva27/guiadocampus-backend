import { CreateFileDto } from "src/files/dto/create-file.dto";

export class CreateProcedureDto {
	title: string;
	description: string;
	embeds?: CreateFileDto[];
	sectorsId?: string[];
}
