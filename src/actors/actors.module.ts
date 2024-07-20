import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsRepository } from './actors.repository';
import { ActorsController } from './actors.controller';

@Module({
  controllers: [ActorsController],
  providers: [ActorsService, ActorsRepository]
})
export class ActorsModule {}
