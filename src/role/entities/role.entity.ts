import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { Lid } from '../../lid/entities/lid.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  //   @OneToMany((type) => Lid, (lid) => lid.status_id)
  //   lids: Lid[];
}
