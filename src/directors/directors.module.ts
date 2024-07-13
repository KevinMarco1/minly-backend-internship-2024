import { Module } from '@nestjs/common';
import { DirectorsService } from './directors.service';
import { DirectorsController } from './directors.controller';
import { DirectorsRepository } from './directors.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from 'src/entities/director.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Director])],

  providers: [DirectorsService , DirectorsRepository],
  controllers: [DirectorsController]
})
export class DirectorsModule {}
