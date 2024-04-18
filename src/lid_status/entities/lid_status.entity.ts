import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LidStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;
}
