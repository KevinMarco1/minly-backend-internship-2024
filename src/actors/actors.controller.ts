import { Controller, Get, Param } from '@nestjs/common';
import { ActorsService } from './actors.service';

@Controller('actors')
export class ActorsController {
    constructor(readonly actorsService: ActorsService){}

    
    @Get(':uuid')
    async getActorWithAwardsByUuid(@Param('uuid') uuid : string) {
        return this.actorsService.getActorWithAwardsByUuid(uuid) ;
    }
}
