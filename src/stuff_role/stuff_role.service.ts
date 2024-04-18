import { Injectable } from '@nestjs/common';
import { CreateStuffRoleDto } from './dto/create-stuff_role.dto';
import { UpdateStuffRoleDto } from './dto/update-stuff_role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StuffRole } from './entities/stuff_role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StuffRoleService {
  constructor(
    @InjectRepository(StuffRole)
    private stuffRoleRepository: Repository<StuffRole>,
  ) {}

  create(createStuffRoleDto: CreateStuffRoleDto) {
    return this.stuffRoleRepository.save(createStuffRoleDto);
  }

  findAll() {
    return this.stuffRoleRepository.find();
  }

  findOne(id: number) {
    return this.stuffRoleRepository.findOneBy({ id });
  }

  update(id: number, updateStuffRoleDto: UpdateStuffRoleDto) {
    return this.stuffRoleRepository.update(id, updateStuffRoleDto);
  }

  remove(id: number) {
    return this.stuffRoleRepository.delete(id);
  }
}
