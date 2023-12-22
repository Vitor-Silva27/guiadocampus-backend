import { ApiProperty } from "@nestjs/swagger";
import { CreateContactDto } from "src/contact/dto/create-contact.dto";
import { CreateFileDto } from "src/files/dto/create-file.dto";
import { CreateInfoDto } from "src/info/dto/create-info.dto";
import { CreateProcedureDto } from "src/procedures/dto/create-procedure.dto";

export class CreateSectorDto {
	name: string;
	description: string;
	icon?: string;
	generalInfo: CreateInfoDto[];
	services?: CreateProcedureDto[];
	contacts?: CreateContactDto[];
	files?: CreateFileDto[];
}
