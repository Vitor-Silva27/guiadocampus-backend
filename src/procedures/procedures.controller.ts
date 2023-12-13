import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Req,
	Query,
	UseGuards,
} from "@nestjs/common";
import { ProceduresService } from "./procedures.service";
import { CreateProcedureDto } from "./dto/create-procedure.dto";
import { UpdateProcedureDto } from "./dto/update-procedure.dto";
import { JwtGuard } from "src/auth/jwt.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("services/protocols")
@Controller("procedures")
export class ProceduresController {
	constructor(private readonly proceduresService: ProceduresService) {}

	@ApiBearerAuth()
	@UseGuards(JwtGuard)
	@Post()
	create(@Body() createProcedureDto: CreateProcedureDto) {
		return this.proceduresService.create(createProcedureDto);
	}

	@Get()
	findAll() {
		return this.proceduresService.findAll();
	}

	@Get("search")
	search(@Query("term") term: string) {
		return this.proceduresService.search(term);
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.proceduresService.findOne(id);
	}

	@Get("/sector/:id")
	findBySector(@Param("id") id: string) {
		return this.proceduresService.findBySector(id);
	}

	@ApiBearerAuth()
	@UseGuards(JwtGuard)
	@Patch(":id")
	update(
		@Param("id") id: string,
		@Body() updateProcedureDto: UpdateProcedureDto,
	) {
		return this.proceduresService.update(id, updateProcedureDto);
	}

	@ApiBearerAuth()
	@UseGuards(JwtGuard)
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.proceduresService.remove(id);
	}
}
