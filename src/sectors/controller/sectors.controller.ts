import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UseGuards,
	Query,
} from "@nestjs/common";
import { SectorsService } from "../service/sectors.service";
import { CreateSectorDto } from "../dto/create-sector.dto";
import { UpdateSectorDto } from "../dto/update-sector.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtGuard } from "src/auth/jwt.guard";

@ApiTags("sectors")
@Controller("sectors")
export class SectorsController {
	constructor(private readonly sectorsService: SectorsService) {}

	@ApiBearerAuth()
	@UseGuards(JwtGuard)
	@Post()
	create(@Body() createSectorDto: CreateSectorDto) {
		return this.sectorsService.create(createSectorDto);
	}

	@Get()
	findAll() {
		return this.sectorsService.findAll();
	}

	@Get("search")
	search(@Query("term") term: string) {
		return this.sectorsService.search(term);
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.sectorsService.findOne(id);
	}

	@ApiBearerAuth()
	@UseGuards(JwtGuard)
	@Patch(":id")
	update(@Param("id") id: string, @Body() updateSectorDto: UpdateSectorDto) {
		return this.sectorsService.update(id, updateSectorDto);
	}

	@ApiBearerAuth()
	@UseGuards(JwtGuard)
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.sectorsService.remove(id);
	}
}
