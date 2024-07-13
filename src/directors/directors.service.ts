import { Injectable } from '@nestjs/common';
import { DirectorsRepository } from './directors.repository';
import { CreateDirectorDto } from './dtos/create-director.dto';

@Injectable()
export class DirectorsService {


    constructor(private readonly directorRepository: DirectorsRepository){}


    async createDirector(createDirectorDto : CreateDirectorDto){
        return await this.directorRepository.createDirector(createDirectorDto) ;
    }
}
