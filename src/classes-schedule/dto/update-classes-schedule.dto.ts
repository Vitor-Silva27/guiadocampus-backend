import { PartialType } from '@nestjs/swagger';
import { CreateClassesScheduleDto } from './create-classes-schedule.dto';

export class UpdateClassesScheduleDto extends PartialType(CreateClassesScheduleDto) {}
