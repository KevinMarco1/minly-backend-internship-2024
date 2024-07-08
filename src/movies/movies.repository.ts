import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/entities/movie.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dtos/body/create-movie.dto';

@Injectable()
export class MoviesRepository {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  public async createMovie(movieData: CreateMovieDto): Promise<Movie> {
    const newMovie = this.movieRepository.create(movieData);
    return await this.movieRepository.save(newMovie);
  }

  public async getMoviesByLimitAndOffesetAndFilterBy(
    limit: number,
    offset: number,
    sortBy: string | undefined,
    sortOrder: 'ASC' | 'DESC',
    filterValue?: string
  ): Promise<Movie[]> {
  
    const queryBuilder = this.movieRepository.createQueryBuilder('movie')
      .take(limit)
      .skip(offset);
  
    if (sortBy) {
      queryBuilder.orderBy(`movie.${sortBy}`, sortOrder);
    }
  
    if (filterValue) {
      queryBuilder.andWhere("(LOWER(movie.title) = LOWER(:filterValue))", { filterValue });
    }
  
    return await queryBuilder.getMany();
  }
  
}
