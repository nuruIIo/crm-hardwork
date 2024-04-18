import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReasonLid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reason: string;
}
