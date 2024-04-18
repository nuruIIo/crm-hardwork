import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { Lid } from '../../lid/entities/lid.entity';

@Entity()
export class Stuff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column({ default: false })
  is_active: boolean;

  //   @OneToMany((type) => Lid, (lid) => lid.status_id)
  //   lids: Lid[];
}
