import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone: string;

  @Column()
  target_id: number;

  @Column()
  stage_id: number;

  @Column()
  test_date: Date;

  @Column()
  trial_lesson_date: Date;

  @Column()
  trial_lesson_time: string;

  @Column()
  trial_lesson_group_id: number;

  @Column()
  status_id: number;

  @Column()
  reason_id: number;
}
