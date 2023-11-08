import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from "@nestjs/common";
import { SectorsService } from "../service/sectors.service";
import { CreateSectorDto } from "../dto/create-sector.dto";
import { UpdateSectorDto } from "../dto/update-sector.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("sectors")
@Controller("sectors")
export class SectorsController {
	constructor(private readonly sectorsService: SectorsService) {}

	@Post()
	create(@Body() createSectorDto: CreateSectorDto) {
		try {
			return this.sectorsService.create(createSectorDto);
		} catch (err) {
			throw err;
		}
	}

	@Get()
	findAll() {
		return this.sectorsService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.sectorsService.findOne(id);
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateSectorDto: UpdateSectorDto) {
		return this.sectorsService.update(id, updateSectorDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.sectorsService.remove(id);
	}
}
