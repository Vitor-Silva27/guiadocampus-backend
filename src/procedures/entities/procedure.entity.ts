import { CreateFileDto } from "src/files/dto/create-file.dto";

export class Procedure {
	id?: string;
	title: string;
	description: string;
	embeds?: CreateFileDto[];
	sectorsId?: string[];

	constructor(
		id?: string,
		title?: string,
		description?: string,
		embeds?: CreateFileDto[],
		sectorsId?: string[],
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.embeds = embeds;
		this.sectorsId = sectorsId;
	}
}
