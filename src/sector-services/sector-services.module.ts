import { Module } from '@nestjs/common';
import { SectorServicesService } from './sector-services.service';
import { SectorServicesController } from './sector-services.controller';

@Module({
  controllers: [SectorServicesController],
  providers: [SectorServicesService],
})
export class SectorServicesModule {}
