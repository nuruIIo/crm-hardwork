import { Injectable } from '@nestjs/common';
import { CreateReasonLidDto } from './dto/create-reason_lid.dto';
import { UpdateReasonLidDto } from './dto/update-reason_lid.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReasonLid } from './entities/reason_lid.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReasonLidService {
  constructor(
    @InjectRepository(ReasonLid)
    private reasonLidRepository: Repository<ReasonLid>,
  ) {}

  create(createReasonLidDto: CreateReasonLidDto) {
    return this.reasonLidRepository.save(createReasonLidDto);
  }

  findAll() {
    return this.reasonLidRepository.find();
  }

  findOne(id: number) {
    return this.reasonLidRepository.findOneBy({ id });
  }

  update(id: number, updateReasonLidDto: UpdateReasonLidDto) {
    return this.reasonLidRepository.update({ id }, updateReasonLidDto);
  }

  remove(id: number) {
    return this.reasonLidRepository.delete(id);
  }
}
