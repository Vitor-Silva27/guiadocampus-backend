import { Injectable } from '@nestjs/common';
import { CreateSectorServiceDto } from './dto/create-sector-service.dto';
import { UpdateSectorServiceDto } from './dto/update-sector-service.dto';

@Injectable()
export class SectorServicesService {
  create(createSectorServiceDto: CreateSectorServiceDto) {
    return 'This action adds a new sectorService';
  }

  findAll() {
    return `This action returns all sectorServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sectorService`;
  }

  update(id: number, updateSectorServiceDto: UpdateSectorServiceDto) {
    return `This action updates a #${id} sectorService`;
  }

  remove(id: number) {
    return `This action removes a #${id} sectorService`;
  }
}
