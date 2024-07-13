import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MoviesRepository } from './movies.repository';
import { Movie } from 'src/entities/movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from 'src/entities/director.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie,Director])],
  controllers: [MoviesController],
  providers: [MoviesService , MoviesRepository]
})
export class MoviesModule {}
