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
