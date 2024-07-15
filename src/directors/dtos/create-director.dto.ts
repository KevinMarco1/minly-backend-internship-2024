import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsDate, IsEnum, IsOptional, IsInt, IsPositive, IsUrl } from 'class-validator';
import { Gender } from 'src/entities/gender.enum';



export class CreateDirectorDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
   first_name: string;

   @ApiProperty()
    @IsNotEmpty()
    @IsString()
    last_name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    birth_date: Date;

    @ApiProperty()
  @IsOptional()
  @IsString()
   bio?: string;

   @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  nationality?: string;

    @ApiProperty()
    @IsOptional()
    @IsUrl()
    picture?: string;


    @ApiProperty()
    @IsOptional()
    @IsInt()
    @IsPositive()
    number_of_awards?: number;

}
