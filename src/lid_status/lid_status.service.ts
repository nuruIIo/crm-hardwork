import { Injectable } from '@nestjs/common';
import { CreateLidStatusDto } from './dto/create-lid_status.dto';
import { UpdateLidStatusDto } from './dto/update-lid_status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LidStatus } from './entities/lid_status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LidStatusService {
  constructor(
    @InjectRepository(LidStatus)
    private lidStatusRepository: Repository<LidStatus>,
  ) {}

  create(createLidStatusDto: CreateLidStatusDto) {
    return this.lidStatusRepository.save(createLidStatusDto);
  }

  findAll() {
    return this.lidStatusRepository.find();
  }

  findOne(id: number) {
    return this.lidStatusRepository.findOneBy({ id });
  }

  update(id: number, updateLidStatusDto: UpdateLidStatusDto) {
    return this.lidStatusRepository.update({ id }, updateLidStatusDto);
  }

  remove(id: number) {
    return this.lidStatusRepository.delete(id);
  }
}
