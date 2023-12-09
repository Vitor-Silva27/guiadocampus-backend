import { PrismaService } from "src/database/prisma.service";
import { IContactRepository } from "./IContactRepository";
import { Injectable } from "@nestjs/common";
import { CreateContactDto } from "../dto/create-contact.dto";
import { Contact } from "@prisma/client";
import { UpdateContactDto } from "../dto/update-contact.dto";

@Injectable()
export class ContactPrismaRepository implements IContactRepository {
	constructor(private prisma: PrismaService) {}

	async create(contact: CreateContactDto): Promise<Contact> {
		const newContact = await this.prisma.contact.create({
			data: {
				title: contact.title,
				responsible: contact.responsible,
				email: contact.email,
				phone: contact.phone,
				sectors: {
					connect: contact.sectorsId.map(sector => ({
						id: sector,
					})),
				},
			},
		});

		return newContact;
	}

	async update(id: string, data: UpdateContactDto): Promise<Contact> {
		const contact = await this.prisma.contact.update({
			where: {
				id,
			},
			data,
		});

		return contact;
	}

	async findAll(): Promise<Contact[]> {
		return await this.prisma.contact.findMany();
	}

	async findOne(id: string): Promise<Contact> {
		return this.prisma.contact.findUnique({
			where: {
				id: id,
			},
		});
	}

	async delete(id: string): Promise<Contact> {
		return await this.prisma.contact.delete({
			where: {
				id,
			},
		});
	}
}
