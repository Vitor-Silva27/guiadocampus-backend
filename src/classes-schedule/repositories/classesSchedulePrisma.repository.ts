import { PrismaService } from "src/database/prisma.service";
import { IClassesScheduleRepository } from "./IClassesScheduleRepository";
import { Injectable } from "@nestjs/common";
import { CreateClassesScheduleDto } from "../dto/create-classes-schedule.dto";
import { ClassesSchedule } from "../entities/classes-schedule.entity";
import { UpdateClassesScheduleDto } from "../dto/update-classes-schedule.dto";

@Injectable()
export class ClassesSchedulePrismaRepository
	implements IClassesScheduleRepository
{
	constructor(private prisma: PrismaService) {}

	async create(
		classesSchedule: CreateClassesScheduleDto,
	): Promise<ClassesSchedule> {
		const newClassesSchedule = await this.prisma.classSchedule.create({
			data: {
				course: classesSchedule.course,
				embedId: classesSchedule.fileId,
			},
		});

		return newClassesSchedule;
	}

	async update(
		id: string,
		{ course, fileId }: UpdateClassesScheduleDto,
	): Promise<ClassesSchedule> {
		const ClassesSchedule = await this.prisma.classSchedule.update({
			where: {
				id,
			},
			data: {
				course,
				embedId: fileId,
			},
		});

		return ClassesSchedule;
	}

	async findAll(): Promise<ClassesSchedule[]> {
		return await this.prisma.classSchedule.findMany({
			select: {
				id: true,
				course: true,
				embed: {
					select: {
						link: true,
						icon: true,
					},
				},
			},
			orderBy: {
				course: "asc",
			},
		});
	}

	async findOne(id: string): Promise<ClassesSchedule> {
		return this.prisma.classSchedule.findUnique({
			where: {
				id: id,
			},
			include: {
				embed: {
					select: {
						link: true,
					},
				},
			},
		});
	}

	async delete(id: string): Promise<ClassesSchedule> {
		return await this.prisma.classSchedule.delete({
			where: {
				id,
			},
		});
	}

	async exists(identifier: string): Promise<boolean> {
		const exists = await this.prisma.classSchedule.findFirst({
			where: {
				OR: [
					{
						id: identifier,
					},
				],
			},
		});

		return !!exists;
	}

	async search(query: string): Promise<ClassesSchedule[]> {
		return await this.prisma.classSchedule.findMany({
			where: {
				OR: [
					{
						course: {
							contains: query,
						},
					},
				],
			},
			orderBy: {
				course: "asc",
			},
		});
	}
}
