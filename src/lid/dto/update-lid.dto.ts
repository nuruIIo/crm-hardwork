import { PartialType } from '@nestjs/mapped-types';
import { CreateLidDto } from './create-lid.dto';

export class UpdateLidDto extends PartialType(CreateLidDto) {}
