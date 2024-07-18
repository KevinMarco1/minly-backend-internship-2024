import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dtos/body/create-movie.dto';
import { SortAndFilterAndPaginateMovieDto } from './dtos/query-param/sort-movie.dto';

@Controller('movies')
export class MoviesController {
    
    constructor(private movieService : MoviesService){}

    @Post()
    async createMovie(@Body() createMovieDto : CreateMovieDto){
        return this.movieService.createMovie(createMovieDto) ;
    }

    @Get()
    async getMovies(
       @Query() sortAndFilterAndPaginateMovieDto: SortAndFilterAndPaginateMovieDto,
){
        return this.movieService.getMoviesByLimitAndOffesetAndFilterBy( sortAndFilterAndPaginateMovieDto  ) ;
    }


    @Get(':uuid')
    async getMovieDetails(
        @Param('uuid') movieUUID : string
    ){
        return this.movieService.getMovieDetails(movieUUID) ;
    }

}
