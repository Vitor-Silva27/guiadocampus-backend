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
import { SectorsService } from "../service/sectors.service";
import { CreateSectorDto } from "../dto/create-sector.dto";
import { UpdateSectorDto } from "../dto/update-sector.dto";
import { ApiTags } from "@nestjs/swagger";
import { JwtGuard } from "src/auth/jwt.guard";

@ApiTags("sectors")
@Controller("sectors")
export class SectorsController {
	constructor(private readonly sectorsService: SectorsService) {}

	@UseGuards(JwtGuard)
	@Post()
	create(@Body() createSectorDto: CreateSectorDto) {
		return this.sectorsService.create(createSectorDto);
	}

	@Get()
	findAll() {
		return this.sectorsService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.sectorsService.findOne(id);
	}

	@UseGuards(JwtGuard)
	@Patch(":id")
	update(@Param("id") id: string, @Body() updateSectorDto: UpdateSectorDto) {
		return this.sectorsService.update(id, updateSectorDto);
	}

	@UseGuards(JwtGuard)
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.sectorsService.remove(id);
	}
}
