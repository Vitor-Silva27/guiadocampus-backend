jest.mock("../service/sectors.service");
import { SectorsController } from "./sectors.controller";
import { SectorsService } from "../service/sectors.service";
import { InMemoryRepository } from "../repositories/in-memory.repository";

describe("SectorsController", () => {
	let controller: SectorsController;
	let service: SectorsService;

	beforeEach(() => {
		service = new SectorsService(new InMemoryRepository());
		controller = new SectorsController(service);
		service.create;
	});
	it("should throw a bad request in case of missing properties", () => {});
});
