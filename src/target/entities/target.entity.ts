import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Target {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
