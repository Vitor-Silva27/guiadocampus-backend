import {
	BadRequestException,
	Inject,
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { CreateAdminDto } from "../dto/create-admin.dto";
import { IAdminRepository } from "../repositories/IAdminRepository";
import { Admin } from "../entities/admin.entity";

@Injectable()
export class AdminService {
	constructor(
		@Inject("RepositoryGateway")
		private repository: IAdminRepository,
	) {}

	async create(createAdminDto: CreateAdminDto): Promise<Admin> {
		if (await this.exists(createAdminDto.email)) {
			throw new BadRequestException(
				"Could not create an admin that already exists!",
			);
		}

		if (!createAdminDto.name) {
			throw new BadRequestException(
				"Could not create an admin without a name!",
			);
		}

		if (!createAdminDto.email) {
			throw new BadRequestException(
				"Could not create an admin without an email!",
			);
		}

		return this.repository.create(createAdminDto);
	}

	async findAll() {
		return await this.repository.findAll();
	}

	async findOne(id: string) {
		if (!id) {
			throw new BadRequestException("invalid id!");
		}

		const admin = await this.repository.findOne(id);

		if (!admin) {
			throw new NotFoundException("admin not found!");
		}
		return admin;
	}

	async findOneByEmail(email: string) {
		if (!email) {
			throw new BadRequestException("invalid email!");
		}

		const admin = await this.repository.findByEmail(email);

		if (!admin) {
			throw new NotFoundException("admin not found!");
		}

		return admin;
	}

	async remove(id: string) {
		if (!id) {
			throw new BadRequestException("invalid id!");
		}

		if (!(await this.exists(id))) {
			throw new NotFoundException("This admin does not exist!");
		}

		return await this.repository.delete(id);
	}

	async exists(identifier: string) {
		return await this.repository.exists(identifier);
	}
}
