import { IAdminRepository } from "../repositories/IAdminRepository";
import { InMemoryRepository } from "../repositories/in-memory.repository";
import { AdminService } from "./admin.service";
import adminWithoutName from "../common/mocks/admin-without-name.json";
import adminWithoutemail from "../common/mocks/admin-without-email.json";
import validAdmin from "../common/mocks/valid-admin.json";

describe("AdminsService", () => {
	let service: AdminService;
	let repository: IAdminRepository;

	beforeEach(() => {
		repository = new InMemoryRepository();
		service = new AdminService(repository);
	});

	describe("Admins creation suite", () => {
		it("should create a Admin", async () => {});

		it("should not create an Admin without name", async () => {
			expect(async () => {
				await service.create(adminWithoutName);
			}).rejects.toThrow("Could not create an admin without a name!");
		});

		it("should not create an Admin without email", async () => {
			expect(async () => {
				await service.create(adminWithoutemail);
			}).rejects.toThrow("Could not create an admin without an email!");
		});

		it("should not create an Admin that already exists", async () => {
			expect(async () => {
				await service.create(validAdmin);
				await service.create(validAdmin);
			}).rejects.toThrow("Could not create an admin that already exists!");
		});
	});

	describe("Admins find all suite", () => {
		it("should find all Admins", async () => {
			await service.create(validAdmin);
			const Admins = await service.findAll();
			expect(Admins.length).toBeGreaterThan(0);
		});
	});

	describe("Admins find one suite", () => {
		it("should find a Admin by id", async () => {});

		it("should throw an error if id is invalid", async () => {
			expect(async () => {
				const Admin = await service.findOne("");
				return Admin;
			}).rejects.toThrow("invalid id!");
		});

		it("should throw a not found if Admin does not exists!", async () => {
			expect(async () => {
				const Admin = await service.findOne("123");
				return Admin;
			}).rejects.toThrow("admin not found!");
		});
	});

	describe("Admin delete suite", () => {
		it("should delete a Admin", async () => {
			const newAdmin = await service.create(validAdmin);
			await service.remove(newAdmin.id);
			expect(async () => {
				await service.findOne(newAdmin.id);
			}).rejects.toThrow("admin not found!");
		});

		it("should throw a not found if Admin does not exist!", async () => {
			expect(async () => {
				await service.remove("123");
			}).rejects.toThrow("This admin does not exist!");
		});

		it("should throw an error if id is invalid", async () => {
			expect(async () => {
				await service.create(validAdmin);

				await service.remove("");
			}).rejects.toThrow("invalid id!");
		});
	});
});
