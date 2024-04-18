import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Lid } from '../../lid/entities/lid.entity';

@Entity()
export class ReasonLid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reason: string;

  @OneToMany((type) => Lid, (lid) => lid.reason_id)
  lids: Lid[];
}
