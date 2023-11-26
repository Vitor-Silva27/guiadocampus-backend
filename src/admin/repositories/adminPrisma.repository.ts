import { PrismaService } from "src/database/prisma.service";
import { Injectable } from "@nestjs/common";
import { IAdminRepository } from "./IAdminRepository";
import { CreateAdminDto } from "../dto/create-admin.dto";
import { UpdateAdminDto } from "../dto/update-admin.dto";
import { Admin } from "../entities/admin.entity";
import bcrypt from "bcrypt";
import { env } from "process";

@Injectable()
export class AdminPrismaRepository implements IAdminRepository {
	constructor(private prisma: PrismaService) {}

	async create(admin: CreateAdminDto): Promise<Admin> {
		admin.password = await this.hashPassword(admin.password);

		return await this.prisma.admin.create({
			data: admin,
		});
	}

	async update(id: string, admin: UpdateAdminDto): Promise<Admin> {
		throw new Error("Method not implemented.");
	}

	async findAll(): Promise<Admin[]> {
		return await this.prisma.admin.findMany();
	}

	async findOne(id: string): Promise<Admin> {
		return this.prisma.admin.findUnique({
			where: {
				id: id,
			},
		});
	}

	async findByEmail(email: string): Promise<Admin> {
		return this.prisma.admin.findFirst({
			where: {
				email: email,
			},
		});
	}

	async delete(id: string): Promise<Admin> {
		return await this.prisma.admin.delete({ where: { id: id } });
	}

	async exists(identifier: string): Promise<boolean> {
		return !!(await this.prisma.admin.findFirst({
			where: {
				OR: [
					{
						id: identifier,
					},
					{
						email: identifier,
					},
				],
			},
		}));
	}

	private async hashPassword(notHashedPassword: string): Promise<string> {
		return bcrypt.hash(notHashedPassword, +env.PASSWORD_HASH);
	}
}
