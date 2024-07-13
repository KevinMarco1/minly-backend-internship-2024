import { Module } from '@nestjs/common';
import { DirectorsService } from './directors.service';
import { DirectorsController } from './directors.controller';
import { DirectorsRepository } from './directors.repository';

@Module({
  providers: [DirectorsService , DirectorsRepository],
  controllers: [DirectorsController]
})
export class DirectorsModule {}
