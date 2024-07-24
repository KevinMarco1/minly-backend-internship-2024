import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FirebaseAdminService } from './firebase.auth.service';

@Injectable()
export class AuthService {
    private readonly saltRounds = 10;

    constructor(private readonly firebaseAdminService: FirebaseAdminService) {}

    async verifyIdToken(idToken: string): Promise<any> {
      try {
        const decodedToken = await this.firebaseAdminService.getAuth().verifyIdToken(idToken);        
        return decodedToken;
      } catch (error) {
        throw new UnauthorizedException('Invalid Firebase token');
      }
    }

}
