import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from "class-validator";


export class SortAndFilterAndPaginateMovieDto{
    @ApiProperty()
    @IsOptional()
    @IsString() 
    @IsIn(['releaseDate' , 'averageRating' , 'none'])
    sortBy? : string ;


    @ApiProperty()
    @IsOptional()
    @IsString() 
    @IsIn(['asc' , 'desc'])
    sortOrder? : string ;


    @ApiProperty()
    @IsOptional()
    @IsString() 
    @IsNotEmpty()
    offset? : string ;


    @ApiProperty()
    @IsOptional()
    @IsNotEmpty() 
    @IsString()
    limit? : string ;

    @ApiProperty()
    @IsOptional()
    @IsString() 
    @IsNotEmpty()
    filterValue? : string ;
}