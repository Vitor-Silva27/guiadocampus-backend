import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SectorServicesService } from './sector-services.service';
import { CreateSectorServiceDto } from './dto/create-sector-service.dto';
import { UpdateSectorServiceDto } from './dto/update-sector-service.dto';

@Controller('sector-services')
export class SectorServicesController {
  constructor(private readonly sectorServicesService: SectorServicesService) {}

  @Post()
  create(@Body() createSectorServiceDto: CreateSectorServiceDto) {
    return this.sectorServicesService.create(createSectorServiceDto);
  }

  @Get()
  findAll() {
    return this.sectorServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectorServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSectorServiceDto: UpdateSectorServiceDto) {
    return this.sectorServicesService.update(+id, updateSectorServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sectorServicesService.remove(+id);
  }
}
