import { Body, Controller, Post } from '@nestjs/common';
import { CreateDirectorDto } from './dtos/create-director.dto';
import { DirectorsService } from './directors.service';

@Controller('directors')
export class DirectorsController {

    constructor(private readonly directorService: DirectorsService){}

    @Post()
    async createDirector(@Body() createDirectorDto : CreateDirectorDto){

    }
}
