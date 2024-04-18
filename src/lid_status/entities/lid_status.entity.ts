import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Lid } from '../../lid/entities/lid.entity';

@Entity()
export class LidStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @OneToMany((type) => Lid, (lid) => lid.status_id)
  lids: Lid[];
}
