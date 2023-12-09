import { Injectable } from "@nestjs/common";
import { CreateContactDto } from "../dto/create-contact.dto";
import { UpdateContactDto } from "../dto/update-contact.dto";
import { Contact } from "../entities/contact.entity";
import { IContactRepository } from "./IContactRepository";

@Injectable()
export class InMemoryRepository implements IContactRepository {
	private contacts: Contact[] = [];

	async create(contact: CreateContactDto): Promise<Contact> {
		const newContact = { ...contact, id: "id" + (this.contacts.length + 1) };
		this.contacts.push(newContact);
		return newContact;
	}

	async update(id: string, data: UpdateContactDto): Promise<Contact> {
		const index = this.contacts.findIndex(contact => contact.id === id);
		if (index === -1) {
			return null; // Ou outra lógica que você preferir
		}

		const updatedContact = { ...this.contacts[index], ...data };
		this.contacts[index] = updatedContact;
		return updatedContact;
	}

	async findAll(): Promise<Contact[]> {
		return this.contacts;
	}

	async findOne(id: string): Promise<Contact> {
		return this.contacts.find(contact => contact.id === id);
	}

	async delete(id: string): Promise<Contact> {
		const index = this.contacts.findIndex(contact => contact.id === id);
		if (index === -1) {
			return null;
		}

		const deleted = this.contacts.splice(index, 1);
		return deleted[0];
	}
}
