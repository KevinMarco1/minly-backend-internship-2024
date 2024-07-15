import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/entities/movie.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dtos/body/create-movie.dto';
import { Director } from 'src/entities/director.entity';

@Injectable()
export class MoviesRepository {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    @InjectRepository(Director)
    private directorRepository: Repository<Director>,
  ) {}

  public async createMovie(movieData: CreateMovieDto): Promise<Movie> {
      const director = await this.directorRepository.findOne({ where: { id: movieData.director_id } });
      if (!director) {
        throw new Error('Director not found');
      }
      
      const movie = this.movieRepository.create({
        ...movieData,
        director: director,
      });
      
      return await this.movieRepository.save(movie);
  }

  public async getMoviesByLimitAndOffesetAndFilterBy(
    limit: number,
    offset: number,
    sortBy: string | undefined,
    sortOrder: 'ASC' | 'DESC',
    filterValue?: string
  ): Promise<Partial<Movie[]>> {
  
    const queryBuilder = this.movieRepository.createQueryBuilder('movie')
    .select([
        'movie.poster',
        'movie.uuid',
        'movie.average_rating',
        "movie.release_date"
    ])
    .take(limit)
    .skip(offset);
  
    if (sortBy !== undefined) {
      queryBuilder.orderBy(`movie.${sortBy}`, sortOrder);
    }
  
    if (filterValue !== undefined) {
      queryBuilder.andWhere("(LOWER(movie.title) = LOWER(:filterValue))", { filterValue });
    }
  
    return await queryBuilder.getMany();
  }
  
}
