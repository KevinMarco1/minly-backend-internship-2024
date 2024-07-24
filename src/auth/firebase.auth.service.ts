import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import serviceAccount from '../config/minly-f5b4a-firebase-adminsdk-m3icz-a90a67b299.json' ;

@Injectable()
export class FirebaseAdminService {
  private readonly admin = admin;

  constructor() {
    this.admin.initializeApp({
      credential: this.admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
  }

  getAuth() {
    return this.admin.auth();
  }

  

}
