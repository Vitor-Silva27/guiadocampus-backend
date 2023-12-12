import { CreateFileDto } from "src/files/dto/create-file.dto";

export class CreateClassesScheduleDto {
	id?: string;
	course?: string;
	fileId: string;
}
