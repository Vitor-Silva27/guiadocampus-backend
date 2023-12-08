import { Test, TestingModule } from '@nestjs/testing';
import { SectorServicesService } from './sector-services.service';

describe('SectorServicesService', () => {
  let service: SectorServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SectorServicesService],
    }).compile();

    service = module.get<SectorServicesService>(SectorServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
