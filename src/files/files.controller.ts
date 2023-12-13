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
@Controller("files")
export class FilesController {
	constructor(private readonly filesService: FilesService) {}

	@UseGuards(JwtGuard)
	@Post()
	@UseInterceptors(FileInterceptor("file"))
	uploadFile(
		@Body() createFileDto: CreateFileDto,
		@UploadedFile() file: Express.Multer.File,
	) {
		return this.filesService.uploadFile(file, createFileDto);
	}
}
