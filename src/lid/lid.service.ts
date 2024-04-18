import { Injectable } from '@nestjs/common';
import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lid } from './entities/lid.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LidService {
  constructor(
    @InjectRepository(Lid)
    private lidRepository: Repository<Lid>,
  ) {}

  async create(createLidDto: CreateLidDto) {
    return this.lidRepository.save(createLidDto);
  }

  async findAll() {
    return this.lidRepository.find();
  }

  async findOne(id: number) {
    return this.lidRepository.findOneBy({ id });
  }

  async update(id: number, updateLidDto: UpdateLidDto) {
    await this.lidRepository.update({ id }, updateLidDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.lidRepository.delete(id);
  }
}
