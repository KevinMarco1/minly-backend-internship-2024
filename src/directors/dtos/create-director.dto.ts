import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsEnum, IsOptional, IsInt, IsPositive, IsUrl } from 'class-validator';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

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
