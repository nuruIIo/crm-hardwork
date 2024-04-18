import { PartialType } from '@nestjs/mapped-types';
import { CreateReasonLidDto } from './create-reason_lid.dto';

export class UpdateReasonLidDto extends PartialType(CreateReasonLidDto) {}
