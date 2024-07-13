import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class SortAndFilterAndPaginateMovieDto{
    @ApiProperty()
    @IsOptional()
    @IsString() 
    @IsIn(['releaseDate' , 'averageRate'])
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
    @IsString() 
    @IsNotEmpty()
    filterValue? : string ;
}