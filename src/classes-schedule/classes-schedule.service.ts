import {
	BadRequestException,
	Inject,
	Injectable,
	NotFoundException,
} from "@nestjs/common";

import { CreateClassesScheduleDto } from "./dto/create-classes-schedule.dto";
import { UpdateClassesScheduleDto } from "./dto/update-classes-schedule.dto";
import { IClassesScheduleRepository } from "./repositories/IClassesScheduleRepository";

@Injectable()
export class ClassesScheduleService {
	constructor(
		@Inject("RepositoryGateway")
		private repository: IClassesScheduleRepository,
	) {}

	async create(createClassesScheduleDto: CreateClassesScheduleDto) {
		if (!createClassesScheduleDto.course) {
			throw new BadRequestException("Course cannot be empty!");
		}

		return this.repository.create(createClassesScheduleDto);
	}

	async findAll() {
		return await this.repository.findAll();
	}

	async findOne(id: string) {
		if (!id) {
			throw new BadRequestException("Invalid ID!");
		}

		const classesSchedule = await this.repository.findOne(id);

		if (!classesSchedule) {
			throw new NotFoundException("Classes Schedule does not exist!");
		}

		return classesSchedule;
	}

	async update(id: string, updateClassesScheduleDto: UpdateClassesScheduleDto) {
		if (!id) {
			throw new BadRequestException("Invalid ID!");
		}

		return await this.repository.update(id, updateClassesScheduleDto);
	}

	async remove(id: string) {
		if (!id) {
			throw new BadRequestException("Invalid ID!");
		}

		return await this.repository.delete(id);
	}

	async search(query: string) {
		return await this.repository.search(query);
	}
}
