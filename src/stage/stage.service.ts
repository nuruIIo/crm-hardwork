import { Injectable } from '@nestjs/common';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Stage } from './entities/stage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StageService {
  constructor(
    @InjectRepository(Stage)
    private stageRepository: Repository<Stage>,
  ) {}

  create(createStageDto: CreateStageDto) {
    return this.stageRepository.save(createStageDto);
  }

  findAll() {
    return this.stageRepository.find();
  }

  findOne(id: number) {
    return this.stageRepository.findOneBy({ id });
  }

  async update(id: number, updateStageDto: UpdateStageDto): Promise<Stage> {
    // Update the record in the database
    await this.stageRepository.update({ id }, updateStageDto);

    // Retrieve and return the updated record
    return this.stageRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.stageRepository.delete(id);
  }
}
