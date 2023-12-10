import { ProceduresService } from "./procedures.service";
import { IProcedureRepository } from "./repositories/IProcedureRepository";
import { InMemoryRepository } from "./repositories/in-memory.repository";
import { CreateProcedureDto } from "./dto/create-procedure.dto";
import { Procedure } from "./entities/procedure.entity";
import { UpdateProcedureDto } from "./dto/update-procedure.dto";

describe("ProceduresService", () => {
	let service: ProceduresService;
	let repository: IProcedureRepository;

	beforeEach(() => {
		repository = new InMemoryRepository();
		service = new ProceduresService(repository);
	});

	describe("Procedure creation suite", () => {
		it("should create a procedure", async () => {
			const createProcedureDto: CreateProcedureDto = {
				title: "Procedure Title",
				description: "Procedure Description",
				sectorsId: ["sectorId1", "sectorId2"],
			};

			const result = await service.create(createProcedureDto);

			expect(result.title).toEqual(createProcedureDto.title);
			expect(result.description).toEqual(createProcedureDto.description);
		});

		it("should not create a procedure without title", async () => {
			const createProcedureDto: CreateProcedureDto = {
				title: "",
				description: "Procedure Description",
				sectorsId: ["sectorId1", "sectorId2"],
			};

			await expect(service.create(createProcedureDto)).rejects.toThrow(
				"Title cannot be empty!",
			);
		});
	});

	describe("Procedure find all suite", () => {
		it("should find all procedures", async () => {
			const procedures: Procedure[] = [
				{ id: "id1", title: "Procedure 1", description: "Description 1" },
				{ id: "id2", title: "Procedure 2", description: "Description 2" },
			];

			repository.create(procedures[0]);
			repository.create(procedures[1]);

			const result = await service.findAll();

			expect(result).toEqual(procedures);
		});
	});

	describe("Procedure find one suite", () => {
		it("should find a procedure by id", async () => {
			const procedure: Procedure = {
				id: "id1",
				title: "Procedure Title",
				description: "Procedure Description",
				sectorsId: ["sectorId1", "sectorId2"],
			};

			await service.create(procedure);

			const result = await service.findOne("id1");

			expect(result).toEqual(procedure);
		});

		it("should throw an error if id is invalid", async () => {
			await expect(service.findOne("")).rejects.toThrow("Invalid id!");
		});
	});

	describe("Procedure update suite", () => {
		it("should update a procedure", async () => {
			const updateProcedureDto: UpdateProcedureDto = {
				title: "Updated Title",
				description: "Updated Description",
			};

			const procedure: Procedure = {
				id: "id1",
				title: "Procedure Title",
				description: "Procedure Description",
				sectorsId: ["sectorId1", "sectorId2"],
			};

			await service.create(procedure);

			const result = await service.update("id1", updateProcedureDto);

			expect(result.title).toEqual(updateProcedureDto.title);
			expect(result.description).toEqual(updateProcedureDto.description);
		});
	});

	describe("Procedure delete suite", () => {
		it("should delete a procedure", async () => {
			const procedure: Procedure = {
				id: "id1",
				title: "Procedure Title",
				description: "Procedure Description",
				sectorsId: ["sectorId1", "sectorId2"],
			};

			repository.create(procedure);

			await service.remove("id1");

			const result = await service.findOne("id1");

			expect(result).toBeUndefined();
		});
	});
});
