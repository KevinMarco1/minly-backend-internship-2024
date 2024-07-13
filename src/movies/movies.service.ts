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



    public async getMoviesByLimitAndOffesetAndFilterBy(sortMovieWithOffsetDto : SortAndFilterAndPaginateMovieDto  ): Promise<Movie[]>{

        // check its a valid offset or not.
        let offset : number = sortMovieWithOffsetDto.offset === undefined ? 0 : parseInt(sortMovieWithOffsetDto.offset) ;
        if(isNaN(offset)){
            // is not a valid number (can not be parsed into integer).
            // for now we will make it have a zero value.
            offset = 0 ;
        }

        // first check query parameter sort by is provided in the url ot not.
        // if provided convert it to have the same form of database schema.
        const sortBy : undefined | string = sortMovieWithOffsetDto.sortBy === undefined ? sortMovieWithOffsetDto.sortBy  : (sortMovieWithOffsetDto.sortBy === 'releaseDate' ? 'release_date' : 'average_rate') ;
        
        // convert sort to be in upper-case as typeorm must be upper-case to do orderby.
        // make default sorting is to get items in desc order.
        let sortOrder : 'ASC' | 'DESC' = 'DESC' ;
        if(sortMovieWithOffsetDto.sortOrder === 'asc') sortOrder = 'ASC' ;


        // add the disered limit (take).
        const limit = 10 ;        

        return this.movieRepository.getMoviesByLimitAndOffesetAndFilterBy(limit , offset , sortBy , sortOrder, sortMovieWithOffsetDto.filterValue) ;
    }




}
