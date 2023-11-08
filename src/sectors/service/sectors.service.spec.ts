import sectorWithoutName from "../common/mocks/sector-without-name.json";
import validSector from "../common/mocks/valid-sector.json";
import { SectorsService } from "./sectors.service";
import { ISectorRepository } from "../repositories/ISectorRepository";
import { InMemoryRepository } from "../repositories/in-memory.repository";

describe("SectorsService", () => {
	let service: SectorsService;
	let repository: ISectorRepository;

	beforeEach(() => {
		repository = new InMemoryRepository();
		service = new SectorsService(repository);
	});

	describe("Sectors creation suite", () => {
		it("should create a sector", async () => {
			const sector = await service.create(validSector);
			expect(sector.name).toBe(validSector.name);
		});

		it("should not create a sector without name", async () => {
			expect(async () => {
				await service.create(sectorWithoutName);
			}).rejects.toThrow("Could not create a sector without a name!");
		});

		it("should not create a sector that already exists", async () => {
			expect(async () => {
				await service.create(validSector);
				await service.create(validSector);
			}).rejects.toThrow("Could not create a sector that already exists!");
		});
	});

	describe("Sectors find all suite", () => {
		it("should find all sectors", async () => {
			await service.create(validSector);
			const sectors = await service.findAll();
			expect(sectors.length).toBeGreaterThan(0);
			expect(sectors[0].name).toBe(validSector.name);
		});
	});

	describe("Sectors find one suite", () => {
		it("should find a sector by id", async () => {
			const newSector = await service.create(validSector);
			const foundSector = await service.findOne(newSector.id);

			expect(foundSector.name).toBe(newSector.name);
		});

		it("should throw an error if id is invalid", async () => {
			expect(async () => {
				const sector = await service.findOne("");
				return sector;
			}).rejects.toThrow("invalid id!");
		});

		it("should throw a not found if sector does not exists!", async () => {
			expect(async () => {
				const sector = await service.findOne("123");
				return sector;
			}).rejects.toThrow("Sector not found!");
		});
	});

	describe("Sectors update suite", () => {
		it("should update a sector", async () => {
			const newSector = await service.create(validSector);

			await service.update(newSector.id, {
				name: "test",
				description: "test description",
			});

			const updatedSector = await service.findOne(newSector.id);

			expect(updatedSector.name).toBe("test");
		});

		it("should throw a not found if sector does not exist!", async () => {
			expect(async () => {
				await service.update("123", {
					name: "test",
					description: "test description",
				});
			}).rejects.toThrow("This sector does not exist!");
		});

		it("should throw a Bad request if sector name is invalid!", async () => {
			expect(async () => {
				const newSector = await service.create(validSector);

				await service.update(newSector.id, {
					name: "",
					description: "test description",
				});
			}).rejects.toThrow("Name cannot be empty!");
		});

		it("should throw an error if id is invalid", async () => {
			expect(async () => {
				await service.create(validSector);

				await service.update("", {
					name: "test",
					description: "test description",
				});
			}).rejects.toThrow("invalid id!");
		});

		it("should throw a bad request if already exists a sector with same name", async () => {
			expect(async () => {
				await service.create(validSector);
				const newSector = await service.create({
					name: "test",
					description: "desc test",
					generalInfo: [
						{
							title: "title test",
							description: "description",
						},
					],
				});

				await service.update(newSector.id, validSector);
			}).rejects.toThrow("Cannot have 2 sectors with the same name!");
		});
	});

	describe("Sector delete suite", () => {
		it("should delete a sector", async () => {
			const newSector = await service.create(validSector);
			await service.remove(newSector.id);
			expect(async () => {
				await service.findOne(newSector.id);
			}).rejects.toThrow("Sector not found!");
		});

		it("should throw a not found if sector does not exist!", async () => {
			expect(async () => {
				await service.remove("123");
			}).rejects.toThrow("This sector does not exist!");
		});

		it("should throw an error if id is invalid", async () => {
			expect(async () => {
				await service.create(validSector);

				await service.remove("");
			}).rejects.toThrow("invalid id!");
		});
	});
});
