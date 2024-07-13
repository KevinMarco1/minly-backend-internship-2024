
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateMovieDto{

    @ApiProperty()
    @IsString()
    @IsOptional()
    @IsUrl()
    poster?: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;


    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    release_date: Date;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    average_rating?: number;

    @ApiProperty()
    @IsNumber()
    director_id: number;
}