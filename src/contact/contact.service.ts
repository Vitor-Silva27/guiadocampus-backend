import {
	BadRequestException,
	Inject,
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { IContactRepository } from "./repositories/IContactRepository";

@Injectable()
export class ContactService {
	constructor(
		@Inject("RepositoryGateway")
		private repository: IContactRepository,
	) {}

	async create(createContactDto: CreateContactDto) {
		if (!createContactDto.title) {
			throw new BadRequestException("Title cannot be empty!");
		}

		return this.repository.create(createContactDto);
	}

	async findAll() {
		return await this.repository.findAll();
	}

	async findOne(id: string) {
		if (!id) {
			throw new BadRequestException("invalid ID!");
		}

		const contact = await this.repository.findOne(id);

		if (!contact) {
			throw new NotFoundException("Contact does not exists!");
		}

		return contact;
	}

	async update(id: string, updateContactDto: UpdateContactDto) {
		if (!id) {
			throw new BadRequestException("invalid ID!");
		}

		return await this.repository.update(id, updateContactDto);
	}

	async remove(id: string) {
		if (!id) {
			throw new BadRequestException("invalid ID!");
		}

		return await this.repository.delete(id);
	}
}
