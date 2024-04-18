import { Injectable } from '@nestjs/common';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Target } from './entities/target.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TargetService {
  constructor(
    @InjectRepository(Target)
    private targetRepository: Repository<Target>,
  ) {}

  create(createTargetDto: CreateTargetDto) {
    return this.targetRepository.save(createTargetDto);
  }

  findAll() {
    return this.targetRepository.find();
  }

  findOne(id: number) {
    return this.targetRepository.findOneBy({ id });
  }

  update(id: number, updateTargetDto: UpdateTargetDto) {
    return this.targetRepository.update({ id }, updateTargetDto);
  }

  remove(id: number) {
    return this.targetRepository.delete(id);
  }
}
