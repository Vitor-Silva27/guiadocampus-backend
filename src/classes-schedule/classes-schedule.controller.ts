import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query,
	UseGuards,
} from "@nestjs/common";
import { ClassesScheduleService } from "./classes-schedule.service";
import { CreateClassesScheduleDto } from "./dto/create-classes-schedule.dto";
import { UpdateClassesScheduleDto } from "./dto/update-classes-schedule.dto";
import { JwtGuard } from "src/auth/jwt.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("schedules")
@Controller("classes-schedule")
export class ClassesScheduleController {
	constructor(
		private readonly classesScheduleService: ClassesScheduleService,
	) {}

	@ApiBearerAuth()
	@UseGuards(JwtGuard)
	@Post()
	create(@Body() createClassesScheduleDto: CreateClassesScheduleDto) {
		return this.classesScheduleService.create(createClassesScheduleDto);
	}

	@Get()
	findAll() {
		return this.classesScheduleService.findAll();
	}

	@Get("search")
	search(@Query("term") term: string) {
		return this.classesScheduleService.search(term);
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.classesScheduleService.findOne(id);
	}

	@ApiBearerAuth()
	@UseGuards(JwtGuard)
	@Patch(":id")
	update(
		@Param("id") id: string,
		@Body() updateClassesScheduleDto: UpdateClassesScheduleDto,
	) {
		return this.classesScheduleService.update(id, updateClassesScheduleDto);
	}

	@ApiBearerAuth()
	@UseGuards(JwtGuard)
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.classesScheduleService.remove(id);
	}
}
