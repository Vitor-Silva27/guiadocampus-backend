import { ApiProperty } from "@nestjs/swagger";

export class GeneralInfo {
	id?: string;

	@ApiProperty({
		example: "dias de funcionamento",
		description: `O titulo da informação geral, podendo ser acervo, qtd de pcs e etc.`,
	})
	title: string;

	@ApiProperty({
		example: "de segunda a sexta",
		description: `a descrição da informação`,
	})
	description: string;
}
