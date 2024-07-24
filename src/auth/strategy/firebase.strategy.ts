import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(Strategy, 'firebase-auth') {
  constructor() {
    super();
  }

  async validate(req: any, done: Function) {
    const token = req.headers.authorization?.split('Bearer ')[1];

    if (!token) {
      return done(new UnauthorizedException('No token provided'), false);
    }

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      const user = { uid: decodedToken.uid, email: decodedToken.email };
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
}
