import { BadRequestException, NotFoundException } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { IContactRepository } from "./repositories/IContactRepository";
import { InMemoryRepository } from "./repositories/in-memory.repository";

describe("ContactService", () => {
	let service: ContactService;
	let repository: IContactRepository;

	beforeEach(() => {
		repository = new InMemoryRepository();
		service = new ContactService(
			repository /* inject SectorService here if needed */,
		);
	});

	describe("Contact creation suite", () => {
		it("should create a contact", async () => {
			const createContactDto = {
				title: "Nome do Contato",
				responsible: "Responsável",
				email: "contato@example.com",
				phone: "123456789",
				sectorsId: ["idSetor1", "idSetor2"],
			};

			const contact = await service.create(createContactDto);
			expect(contact.title).toBe(createContactDto.title);
		});

		it("should not create a contact without title", async () => {
			const createContactDto = {
				title: "",
				responsible: "Responsável",
				email: "contato@example.com",
				phone: "123456789",
				sectorsId: ["idSetor1"],
			};

			await expect(service.create(createContactDto)).rejects.toThrow(
				"Title cannot be empty!",
			);
		});

		// Add more tests as needed
	});

	describe("Contact find all suite", () => {
		it("should find all contacts", async () => {
			await service.create({
				title: "Nome do Contato",
				responsible: "Responsável",
				email: "contato@example.com",
				phone: "123456789",
				sectorsId: ["idSetor1"],
			});

			const contacts = await service.findAll();
			expect(contacts.length).toBeGreaterThan(0);
			expect(contacts[0].title).toBeDefined();
		});
	});

	describe("Contact find one suite", () => {
		it("should find a contact by id", async () => {
			const createContactDto = {
				title: "Nome do Contato",
				responsible: "Responsável",
				email: "contato@example.com",
				phone: "123456789",
				sectorsId: ["idSetor1"],
			};

			const newContact = await service.create(createContactDto);
			const foundContact = await service.findOne(newContact.id);

			expect(foundContact.title).toBe(newContact.title);
		});

		it("should throw an error if id is invalid", async () => {
			await expect(service.findOne("")).rejects.toThrow("invalid ID!");
		});

		it("should throw a not found if contact does not exist", async () => {
			await expect(service.findOne("123")).rejects.toThrow(
				"Contact does not exists!",
			);
		});
	});

	describe("Contact update suite", () => {
		it("should update a contact", async () => {
			const createContactDto = {
				title: "Nome do Contato",
				responsible: "Responsável",
				email: "contato@example.com",
				phone: "123456789",
				sectorsId: ["idSetor1"],
			};

			const newContact = await service.create(createContactDto);

			await service.update(newContact.id, {
				title: "Novo Nome",
				responsible: "Novo Responsável",
				email: "novocontato@example.com",
				phone: "987654321",
			});

			const updatedContact = await service.findOne(newContact.id);

			expect(updatedContact.title).toBe("Novo Nome");
		});
	});

	describe("Contact delete suite", () => {
		it("should delete a contact", async () => {
			const createContactDto = {
				title: "Nome do Contato",
				responsible: "Responsável",
				email: "contato@example.com",
				phone: "123456789",
				sectorsId: ["idSetor1"],
			};

			const newContact = await service.create(createContactDto);
			await service.remove(newContact.id);

			await expect(service.findOne(newContact.id)).rejects.toThrow(
				"Contact does not exists!",
			);
		});
	});
});
