import { ApiProperty } from "@nestjs/swagger";
import { GeneralInfo } from "../common/shared-types";
import { CreateContactDto } from "src/contact/dto/create-contact.dto";
import { CreateFileDto } from "src/files/dto/create-file.dto";
import { CreateProcedureDto } from "src/procedures/dto/create-procedure.dto";

export class CreateSectorDto {
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

	icon?: string;

	@ApiProperty({ type: [GeneralInfo] })
	generalInfo: GeneralInfo[];

	services?: CreateProcedureDto[];

	contacts?: CreateContactDto[];

	files?: CreateFileDto[];
}
