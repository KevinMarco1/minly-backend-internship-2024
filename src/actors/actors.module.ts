import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsRepository } from './actors.repository';
import { ActorsController } from './actors.controller';
import { Actor } from 'src/entities/actor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Actor])],
  controllers: [ActorsController],
  providers: [ActorsService, ActorsRepository]
})
export class ActorsModule {}
