import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Lid } from '../../lid/entities/lid.entity';

@Entity()
export class Target {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Lid, (lid) => lid.target_id)
  lids: Lid[];
}
