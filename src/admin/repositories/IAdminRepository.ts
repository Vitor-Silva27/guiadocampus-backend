import { CreateAdminDto } from "../dto/create-admin.dto";
import { UpdateAdminDto } from "../dto/update-admin.dto";
import { Admin } from "../entities/admin.entity";

export interface IAdminRepository {
	create(admin: CreateAdminDto): Promise<Admin>;
	update(id: string, admin: UpdateAdminDto): Promise<Admin>;
	findAll(): Promise<Admin[]>;
	findOne(id: string): Promise<Admin>;
	delete(id: string): Promise<Admin>;
	exists(identifier: string): Promise<boolean>;
}
