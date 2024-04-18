import { PartialType } from '@nestjs/mapped-types';
import { CreateLidStatusDto } from './create-lid_status.dto';

export class UpdateLidStatusDto extends PartialType(CreateLidStatusDto) {}
