import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { CreateClassesScheduleDto } from "../dto/create-classes-schedule.dto";
import { UpdateClassesScheduleDto } from "../dto/update-classes-schedule.dto";
import ClassesSchedule from "../entities/classes-schedule.entity";
import { IClassesScheduleRepository } from "./IClassesScheduleRepository";

@Injectable()
export class InMemoryClassesScheduleRepository
	implements IClassesScheduleRepository
{
	private classesSchedules: ClassesSchedule[] = [];

	async create(
		classesSchedule: CreateClassesScheduleDto,
	): Promise<ClassesSchedule> {
		const newClassesSchedule = new ClassesSchedule(
			classesSchedule.course,
			classesSchedule.fileId,
		);

		const generatedId = "id" + (this.classesSchedules.length + 1);
		Object.assign(newClassesSchedule, { id: generatedId });

		this.classesSchedules.push(newClassesSchedule);

		return newClassesSchedule;
	}

	async update(
		id: string,
		{ course, fileId }: UpdateClassesScheduleDto,
	): Promise<ClassesSchedule> {
		if (!(await this.exists(id))) {
			throw new NotFoundException("This classes schedule does not exist!");
		}

		const myClassesSchedule = await this.findOne(id);
		myClassesSchedule.course = course;
		myClassesSchedule.file.id = fileId;

		return myClassesSchedule;
	}

	async findAll(): Promise<ClassesSchedule[]> {
		return this.classesSchedules;
	}

	async findOne(id: string): Promise<ClassesSchedule> {
		return this.classesSchedules.find(
			classesSchedule => classesSchedule.id === id,
		);
	}

	async delete(id: string): Promise<ClassesSchedule> {
		if (!(await this.exists(id))) {
			throw new NotFoundException("This classes schedule does not exist!");
		}

		const index = this.classesSchedules.findIndex(
			classesSchedule => classesSchedule.id === id,
		);
		const deleted = this.classesSchedules.splice(index, 1);

		return deleted[0];
	}

	async exists(identifier: string): Promise<boolean> {
		return this.classesSchedules.some(
			classesSchedule => classesSchedule.id === identifier,
		);
	}

	async search(query: string): Promise<ClassesSchedule[]> {
		return this.classesSchedules.filter(classesSchedule =>
			classesSchedule.course.includes(query),
		);
	}
}
