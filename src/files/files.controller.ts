import {
	Controller,
	Post,
	Body,
	UploadedFile,
	UseInterceptors,
	UseGuards,
} from "@nestjs/common";
import { FilesService } from "./files.service";
import { CreateFileDto } from "./dto/create-file.dto";
import { Express } from "express";
import { FileInterceptor } from "@nestjs/platform-express";
import { JwtGuard } from "src/auth/jwt.guard";
import { ApiBearerAuth, ApiConsumes, ApiTags } from "@nestjs/swagger";

@ApiTags("files")
@Controller("files")
export class FilesController {
	constructor(private readonly filesService: FilesService) {}

	@ApiBearerAuth()
	@UseGuards(JwtGuard)
	@Post()
	@ApiConsumes("multipart/form-data")
	@UseInterceptors(FileInterceptor("file"))
	uploadFile(
		@Body() createFileDto: CreateFileDto,
		@UploadedFile() file: Express.Multer.File,
	) {
		return this.filesService.uploadFile(file, createFileDto);
	}
}
