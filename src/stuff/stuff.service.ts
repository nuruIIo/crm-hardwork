import { Injectable } from '@nestjs/common';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Stuff } from './entities/stuff.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StuffService {
  constructor(
    @InjectRepository(Stuff)
    private stuffRepository: Repository<Stuff>,
  ) {}

  create(createStuffDto: CreateStuffDto) {
    return this.stuffRepository.save(createStuffDto);
  }

  findAll() {
    return this.stuffRepository.find();
  }

  findOne(id: number) {
    return this.stuffRepository.findOneBy({ id });
  }

  update(id: number, updateStuffDto: UpdateStuffDto) {
    return this.stuffRepository.update(id, updateStuffDto);
  }

  remove(id: number) {
    return this.stuffRepository.delete(id);
  }
}
