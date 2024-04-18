import { Module } from '@nestjs/common';
import { LidModule } from './lid/lid.module';
import { StageModule } from './stage/stage.module';
import { TargetModule } from './target/target.module';
import { ReasonLidModule } from './reason_lid/reason_lid.module';
import { LidStatusModule } from './lid_status/lid_status.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stage } from './stage/entities/stage.entity';
import { LidStatus } from './lid_status/entities/lid_status.entity';
import { ReasonLid } from './reason_lid/entities/reason_lid.entity';
import { Target } from './target/entities/target.entity';
import { Lid } from './lid/entities/lid.entity';
import { StuffModule } from './stuff/stuff.module';
import { RoleModule } from './role/role.module';
import { StuffRoleModule } from './stuff_role/stuff_role.module';
import { Role } from './role/entities/role.entity';
import { Stuff } from './stuff/entities/stuff.entity';
import { StuffRole } from './stuff_role/entities/stuff_role.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      entities: [
        Stage,
        LidStatus,
        ReasonLid,
        Target,
        Lid,
        Role,
        Stuff,
        StuffRole,
      ],
      synchronize: true,
    }),
    LidModule,
    StageModule,
    TargetModule,
    ReasonLidModule,
    LidStatusModule,
    StuffModule,
    RoleModule,
    StuffRoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
