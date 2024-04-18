import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { LidStatus } from '../../lid_status/entities/lid_status.entity';
import { ReasonLid } from '../../reason_lid/entities/reason_lid.entity';
import { Stage } from '../../stage/entities/stage.entity';
import { Target } from '../../target/entities/target.entity';

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
  test_date: Date;

  @Column()
  trial_lesson_date: Date;

  @Column()
  trial_lesson_time: string;

  @Column()
  trial_lesson_group_id: number;

  @ManyToOne((type) => LidStatus, (status) => status.lids)
  status_id: LidStatus;

  @ManyToOne((type) => ReasonLid, (reason) => reason.lids)
  reason_id: ReasonLid;

  @ManyToOne((type) => Stage, (stage) => stage.lids)
  stage_id: Stage;

  @ManyToOne((type) => Target, (target) => target.lids)
  target_id: Target;
}
