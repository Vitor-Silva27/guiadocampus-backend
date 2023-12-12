import { Test, TestingModule } from '@nestjs/testing';
import { ClassesScheduleService } from './classes-schedule.service';

describe('ClassesScheduleService', () => {
  let service: ClassesScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassesScheduleService],
    }).compile();

    service = module.get<ClassesScheduleService>(ClassesScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
