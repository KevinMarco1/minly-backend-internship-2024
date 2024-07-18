import { Injectable } from '@nestjs/common';
import { MoviesRepository } from './movies.repository';
import { Movie } from 'src/entities/movie.entity';
import { CreateMovieDto } from './dtos/body/create-movie.dto';
import { SortAndFilterAndPaginateMovieDto } from './dtos/query-param/sort-movie.dto';

@Injectable()
export class MoviesService {
    constructor(private movieRepository : MoviesRepository){}

    public async createMovie(movieData : CreateMovieDto): Promise<Movie>{
        return this.movieRepository.createMovie(movieData) ;
    }

    private convertSortByQueryParamToHaveSameFormAsDatabaseSchema(value : string | undefined) : string | undefined{
        // first check query parameter sort by is provided in the url ot not.
        // if provided convert it to have the same form of database schema.
        let sortBy: string | undefined ;
        if(value === undefined){
            sortBy = value
        }else{
            if(value === 'releaseDate'){
                sortBy = 'release_date' ;
            }else if(value === 'averageRating'){
                sortBy = 'average_rating'
            }else{
                sortBy = undefined;
            }
        }
        return sortBy ;
    }

    private convertSortOrderQueryParamToHaveSameFormAsDatabaseSchema(value) : 'ASC' | 'DESC'  {
        // convert sort to be in upper-case as typeorm must be upper-case to do orderby.
        // make default sorting is to get items in desc order.
        let sortOrder : 'ASC' | 'DESC' = 'DESC' ;
        if(value === 'asc') sortOrder = 'ASC' ;
        return sortOrder ;
    }

    public async getMoviesByLimitAndOffesetAndFilterBy(sortMovieWithOffsetDto : SortAndFilterAndPaginateMovieDto  ): Promise<{ movies: Partial<Movie[]>; totalNumberOfPages: number }>
    {
        // check its a valid offset or not.
        let offset : number = sortMovieWithOffsetDto.offset === undefined ? 0 : parseInt(sortMovieWithOffsetDto.offset) ;
        if(isNaN(offset)){
            // is not a valid number (can not be parsed into integer).
            // for now we will make it have a zero value.
            offset = 0 ;
        }

        let sortBy: string | undefined  = this.convertSortByQueryParamToHaveSameFormAsDatabaseSchema(sortMovieWithOffsetDto.sortBy);

        let sortOrder : 'ASC' | 'DESC' = this.convertSortOrderQueryParamToHaveSameFormAsDatabaseSchema(sortMovieWithOffsetDto.sortOrder);
   
        // constrain the limit attribute
        const limit : number = sortMovieWithOffsetDto.limit === undefined ? 8 : (parseInt(sortMovieWithOffsetDto.limit) > 50  ? 8 : parseInt(sortMovieWithOffsetDto.limit)) ;
        if(isNaN(limit)){
            // is not a valid number (can not be parsed into integer).
            // for now we will make it have a zero value.
            offset = 0 ;
        }

        const {movies, totalCount} =  await this.movieRepository.getMoviesByLimitAndOffesetAndFilterBy(limit , offset , sortBy , sortOrder, sortMovieWithOffsetDto.filterValue) ;
        
        // apply logic to calculate page based on limit
        const totalNumberOfPages = Math.ceil(totalCount / limit) - 1;

        return {movies , totalNumberOfPages} ;
    }

    public async getMovieDetails(movieUUID : string){
        const movieData = await this.movieRepository.getMovieDetails(movieUUID);

        if (movieData) {
          const { uuid, poster, title, average_rating, release_date, trailer, actors, director , categories} = movieData;
    
          const updatedActors = actors?.map(({ first_name, last_name, ...rest }) => ({
            ...rest,
            name: `${first_name} ${last_name}`
          }));
    
          const { first_name: directorFirstName, last_name: directorLastName, ...restDirector } = director || {};
          const updatedDirector = director
            ? {
                ...restDirector,
                name: `${directorFirstName} ${directorLastName}`
              }
            : null;
            
          const updatedMovieData = {
            movie:{
                uuid,
                poster,
                title,
                average_rating,
                release_date,
                trailer,
            },
            actors: updatedActors,
            director: updatedDirector,
            categories:categories
          };
    
          return updatedMovieData;
        }
    
        return movieData;
    }

}
