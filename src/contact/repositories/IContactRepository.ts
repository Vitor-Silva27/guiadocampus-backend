import { CreateContactDto } from "../dto/create-contact.dto";
import { UpdateContactDto } from "../dto/update-contact.dto";
import { Contact } from "../entities/contact.entity";

export interface IContactRepository {
	create(sector: CreateContactDto): Promise<Contact>;
	update(id: string, sector: UpdateContactDto): Promise<Contact>;
	findAll(): Promise<Contact[]>;
	findOne(id: string): Promise<Contact>;
	delete(id: string): Promise<Contact>;
}
