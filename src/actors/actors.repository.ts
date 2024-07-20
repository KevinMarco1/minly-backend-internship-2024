import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor } from 'src/entities/actor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActorsRepository {

    constructor(
        @InjectRepository(Actor)
        private actorRepository: Repository<Actor>,
      ) {}


      async getActorWithAwardsByUuid(uuid: string): Promise<Actor> {
        return this.actorRepository.createQueryBuilder('actor')
        .leftJoinAndSelect('actor.movieActorAwards', 'movieActorAward')
        .leftJoinAndSelect('movieActorAward.movie', 'movie')
        .leftJoinAndSelect('movieActorAward.award', 'award')
        .where('actor.uuid = :uuid', { uuid })
        .select([
            'actor.first_name',
            'actor.last_name',
            'actor.birth_date',
            'actor.gender',
            'actor.bio',
            'actor.nationality',
            'actor.picture',
            'movieActorAward.description',
            'movieActorAward.year',       
            'movie.uuid',
            'movie.title',
            'award.name',
        ])
      .getOne();
      }


}
