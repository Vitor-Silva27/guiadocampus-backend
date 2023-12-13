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
import { MapService } from "./map.service";
import { CreateMapDto } from "./dto/create-map.dto";
import { UpdateMapDto } from "./dto/update-map.dto";
import { JwtGuard } from "src/auth/jwt.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("map")
@Controller("map")
export class MapController {
	constructor(private readonly mapService: MapService) {}

	@ApiBearerAuth()
	@UseGuards(JwtGuard)
	@Post()
	create(@Body() createMapDto: CreateMapDto) {
		return this.mapService.create(createMapDto);
	}

	@Get()
	findAll() {
		return this.mapService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.mapService.findOne(id);
	}

	@ApiBearerAuth()
	@UseGuards(JwtGuard)
	@Patch(":id")
	update(@Param("id") id: string, @Body() updateMapDto: UpdateMapDto) {
		return this.mapService.update(id, updateMapDto);
	}

	@ApiBearerAuth()
	@UseGuards(JwtGuard)
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.mapService.remove(id);
	}
}
