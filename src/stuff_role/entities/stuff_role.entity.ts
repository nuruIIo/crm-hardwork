import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { Lid } from '../../lid/entities/lid.entity';

@Entity()
export class StuffRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stuff_id: number;

  @Column()
  role_id: number;

  //   @OneToMany((type) => Lid, (lid) => lid.status_id)
  //   lids: Lid[];
}
