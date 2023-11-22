import { Injectable, NotFoundException } from "@nestjs/common";
import { IAdminRepository } from "./IAdminRepository";
import { CreateAdminDto } from "../dto/create-admin.dto";
import { Admin } from "../entities/admin.entity";
import { UpdateAdminDto } from "../dto/update-admin.dto";

@Injectable()
export class InMemoryRepository implements IAdminRepository {
	private admins: Admin[] = [];

	async create(admin: CreateAdminDto): Promise<Admin> {
		const newadmin = new Admin(admin.name, admin.email, admin.password);

		const generatedId = "id" + (this.admins.length + 1);

		Object.assign(newadmin, { id: generatedId });

		this.admins.push(newadmin);

		return newadmin;
	}

	async update(id: string, admin: UpdateAdminDto): Promise<Admin> {
		if (!(await this.exists(id))) {
			throw new NotFoundException("This admin does not exist!");
		}

		const myadmin = await this.findOne(id);
		myadmin.name = admin.name;
		myadmin.email = admin.email;
		return myadmin;
	}

	async findAll(): Promise<Admin[]> {
		return this.admins;
	}

	async findOne(id: string): Promise<Admin> {
		return this.admins.find(admin => admin.id === id);
	}

	async delete(id: string): Promise<Admin> {
		if (!(await this.exists(id))) {
			throw new NotFoundException("This admin does not exist!");
		}

		const index = this.admins.findIndex(admin => admin.id === id);
		const deleted = this.admins.splice(index, 1);
		return deleted[0];
	}

	async exists(identifier: string): Promise<boolean> {
		return this.admins.some(
			admin => admin.id === identifier || admin.email === identifier,
		);
	}

	private async hashPassword(password: string): Promise<string> {
		return "";
	}
}
