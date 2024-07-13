import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Director } from 'src/entities/director.entity';
import { Repository } from 'typeorm';
import { CreateDirectorDto } from './dtos/create-director.dto';

@Injectable()
export class DirectorsRepository {


    constructor(
        @InjectRepository(Director)
        private directorRepository: Repository<Director>,
      ) {}


      public async createDirector(createDirectorDto: CreateDirectorDto): Promise<Director> {
        const newDirector = this.directorRepository.create(createDirectorDto);
    
        return await this.directorRepository.save(newDirector);
      }
    
}
