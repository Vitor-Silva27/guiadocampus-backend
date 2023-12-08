import { Test, TestingModule } from '@nestjs/testing';
import { SectorServicesController } from './sector-services.controller';
import { SectorServicesService } from './sector-services.service';

describe('SectorServicesController', () => {
  let controller: SectorServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SectorServicesController],
      providers: [SectorServicesService],
    }).compile();

    controller = module.get<SectorServicesController>(SectorServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
