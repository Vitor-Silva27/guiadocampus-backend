import { ApiProperty } from "@nestjs/swagger";
import { GeneralInfo } from "../common/shared-types";
import { CreateSectorServiceDto } from "src/sector-services/dto/create-sector-service.dto";
import { CreateContactDto } from "src/contact/dto/create-contact.dto";
import { CreateFileDto } from "src/files/dto/create-file.dto";

export class Sector {
	id?: string;

	@ApiProperty({
		example: "laboratório 21",
		description: `O nome do setor que será criado, o nome de um setor é único, não podem existir 2 setores com o mesmo nome, se tentar o endpoint retornará Bad request`,
	})
	name: string;

	@ApiProperty({
		example: "lorem ipsum dolor sit amet, consectetur adipis",
		description: `a descrição geral do setor que será criado`,
	})
	description: string;

	@ApiProperty({ type: [GeneralInfo] })
	generalInfo?: GeneralInfo[];

	services?: CreateSectorServiceDto[];

	contacts?: CreateContactDto[];

	files?: CreateFileDto[];

	constructor(
		name: string,
		description: string,
		generalInfo: GeneralInfo[],
		services: CreateSectorServiceDto[] = [],
		contacts: CreateContactDto[] = [],
		files: CreateFileDto[] = [],
	) {
		this.name = name;
		this.description = description;
		this.generalInfo = generalInfo;
		this.services = services;
		this.contacts = contacts;
		this.files = files;
	}
}
