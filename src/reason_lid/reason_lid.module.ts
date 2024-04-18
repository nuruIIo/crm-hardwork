import { Module } from '@nestjs/common';
import { ReasonLidService } from './reason_lid.service';
import { ReasonLidController } from './reason_lid.controller';
import { ReasonLid } from './entities/reason_lid.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ReasonLid])],
  controllers: [ReasonLidController],
  providers: [ReasonLidService],
})
export class ReasonLidModule {}
