import { Injectable } from '@nestjs/common';
import { ActorsRepository } from './actors.repository';

@Injectable()
export class ActorsService {
    constructor(readonly actorsRepository: ActorsRepository){}

    async getActorWithAwardsByUuid(uuid : string){
        const{movieActorAwards , first_name , last_name ,...rest}  = await this.actorsRepository.getActorWithAwardsByUuid(uuid) ;

        const upadtedActorInformation = {
            name: `${first_name} ${last_name}`,
            ...rest,
        }


        const updateActorAwards = movieActorAwards.map(({movie , award , ...restInfo}) => {
            return {
                ...restInfo,
                'name': award.name,
                movie
            }
        } ) ;
        
        return{
            'actor_information:': upadtedActorInformation,
            'awards': updateActorAwards
        }

    }
}
