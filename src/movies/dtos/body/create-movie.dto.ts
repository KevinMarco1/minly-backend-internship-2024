
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMovieDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    poster: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;
}