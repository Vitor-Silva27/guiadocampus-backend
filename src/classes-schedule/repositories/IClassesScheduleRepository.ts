import { CreateClassesScheduleDto } from "../dto/create-classes-schedule.dto";
import { UpdateClassesScheduleDto } from "../dto/update-classes-schedule.dto";
import ClassesSchedule from "../entities/classes-schedule.entity";

export interface IClassesScheduleRepository {
	create(classesSchedule: CreateClassesScheduleDto): Promise<ClassesSchedule>;
	update(
		id: string,
		classesSchedule: UpdateClassesScheduleDto,
	): Promise<ClassesSchedule>;
	findAll(): Promise<ClassesSchedule[]>;
	findOne(id: string): Promise<ClassesSchedule>;
	delete(id: string): Promise<ClassesSchedule>;
	exists(identifier: string): Promise<boolean>;
	search(query: string): Promise<ClassesSchedule[]>;
}
