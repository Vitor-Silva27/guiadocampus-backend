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
import { InfoService } from "./info.service";
import { CreateInfoDto } from "./dto/create-info.dto";
import { UpdateInfoDto } from "./dto/update-info.dto";
import { JwtGuard } from "src/auth/jwt.guard";

@Controller("info")
export class InfoController {
	constructor(private readonly infoService: InfoService) {}

	@UseGuards(JwtGuard)
	@Post()
	create(@Body() createInfoDto: CreateInfoDto) {
		return this.infoService.create(createInfoDto);
	}

	@Get()
	findAll() {
		return this.infoService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.infoService.findOne(id);
	}

	@UseGuards(JwtGuard)
	@Patch(":id")
	update(@Param("id") id: string, @Body() updateInfoDto: UpdateInfoDto) {
		return this.infoService.update(id, updateInfoDto);
	}

	@UseGuards(JwtGuard)
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.infoService.remove(id);
	}
}
