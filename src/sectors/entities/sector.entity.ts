import { ApiProperty } from "@nestjs/swagger";
import { GeneralInfo } from "../common/shared-types";

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

	constructor(name: string, description: string, generalInfo: GeneralInfo[]) {
		this.name = name;
		this.description = description;
		this.generalInfo = generalInfo;
	}
}
