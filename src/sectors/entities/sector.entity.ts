import { ApiProperty } from "@nestjs/swagger";
import { CreateContactDto } from "src/contact/dto/create-contact.dto";
import { CreateFileDto } from "src/files/dto/create-file.dto";
import { CreateInfoDto } from "src/info/dto/create-info.dto";
import { CreateProcedureDto } from "src/procedures/dto/create-procedure.dto";

export class Sector {
	id?: string;

	name: string;

	description?: string;

	generalInfo?: CreateInfoDto[];

	procedures?: CreateProcedureDto[];

	contacts?: CreateContactDto[];

	files?: CreateFileDto[];

	constructor(
		name: string,
		description: string,
		generalInfo: CreateInfoDto[],
		procedures: CreateProcedureDto[] = [],
		contacts: CreateContactDto[] = [],
		files: CreateFileDto[] = [],
	) {
		this.name = name;
		this.description = description;
		this.generalInfo = generalInfo;
		this.procedures = procedures;
		this.contacts = contacts;
		this.files = files;
	}
}
