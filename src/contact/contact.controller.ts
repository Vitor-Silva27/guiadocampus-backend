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
import { ContactService } from "./contact.service";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { JwtGuard } from "src/auth/jwt.guard";

@Controller("contact")
export class ContactController {
	constructor(private readonly contactService: ContactService) {}

	@UseGuards(JwtGuard)
	@Post()
	create(@Body() createContactDto: CreateContactDto) {
		return this.contactService.create(createContactDto);
	}

	@Get()
	findAll() {
		return this.contactService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.contactService.findOne(id);
	}

	@UseGuards(JwtGuard)
	@Patch(":id")
	update(@Param("id") id: string, @Body() updateContactDto: UpdateContactDto) {
		return this.contactService.update(id, updateContactDto);
	}

	@UseGuards(JwtGuard)
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.contactService.remove(id);
	}
}
