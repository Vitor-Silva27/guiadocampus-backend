import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UseGuards,
} from "@nestjs/common";
import { AdminService } from "../service/admin.service";
import { CreateAdminDto } from "../dto/create-admin.dto";
import { ApiTags } from "@nestjs/swagger";
import { JwtGuard } from "src/auth/jwt.guard";

@ApiTags("admin")
//@UseGuards(JwtGuard)
@Controller("admin")
export class AdminController {
	constructor(private readonly adminService: AdminService) {}

	@Post()
	create(@Body() createAdminDto: CreateAdminDto) {
		return this.adminService.create(createAdminDto);
	}

	@Get()
	findAll() {
		return this.adminService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.adminService.findOne(id);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.adminService.remove(id);
	}
}
