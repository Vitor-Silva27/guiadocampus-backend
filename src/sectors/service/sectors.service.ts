import { Injectable } from "@nestjs/common";
import { CreateSectorDto } from "../dto/create-sector.dto";
import { UpdateSectorDto } from "../dto/update-sector.dto";

@Injectable()
export class SectorsService {
	create(createSectorDto: CreateSectorDto) {
		return "This action adds a new sector";
	}

	findAll() {
		return `This action returns all sectors`;
	}

	findOne(id: string) {
		return `This action returns a #${id} sector`;
	}

	update(id: string, updateSectorDto: UpdateSectorDto) {
		return `This action updates a #${id} sector`;
	}

	remove(id: string) {
		return `This action removes a #${id} sector`;
	}
}
