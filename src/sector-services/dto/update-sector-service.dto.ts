import { PartialType } from '@nestjs/swagger';
import { CreateSectorServiceDto } from './create-sector-service.dto';

export class UpdateSectorServiceDto extends PartialType(CreateSectorServiceDto) {}
