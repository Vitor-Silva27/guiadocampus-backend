import { CreateFileDto } from "src/files/dto/create-file.dto";

export class CreateSectorServiceDto {
	title: string;
	description: string;
	embeds?: CreateFileDto[];
}
