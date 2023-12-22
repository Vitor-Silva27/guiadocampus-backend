import { CreateFileDto } from "src/files/dto/create-file.dto";

export default class ClassesSchedule {
	id?: string;
	course?: string;
	file?: CreateFileDto;

	constructor(id?: string, course?: string, file?: CreateFileDto) {
		this.id = id;
		this.course = course;
		this.file = file;
	}
}
