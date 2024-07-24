import { Injectable } from '@nestjs/common';
import { ActorsRepository } from './actors.repository';

@Injectable()
export class ActorsService {
    constructor(readonly actorsRepository: ActorsRepository){}


    async getActorWithAwardsByUuid(uuid : string){
        let actorDetailedData = await this.actorsRepository.getActorWithAwardsByUuid(uuid) ;
        
        const{movieActorAwards , first_name , last_name , movieActors , ...rest}  = actorDetailedData ;

        const actingList = movieActors ;

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
            'actor_information': upadtedActorInformation,
            'acting_list': actingList,
            'awards': updateActorAwards
        }

    }
}
