import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class FirebaseAuthGuard extends AuthGuard('firebase-auth') {

  // The canActivate method determines whether the current request is allowed to proceed
  canActivate(context: ExecutionContext) {
    // Call the AuthGuard's canActivate method to trigger Passport's strategy
    return super.canActivate(context);
  }

  // The handleRequest method handles the result of the authentication process
  handleRequest(err, user, info) {
    // If there's an error or the user is not authenticated, throw an UnauthorizedException
    if (err || !user) {
      throw err || new UnauthorizedException('Unauthorized access');
    }
    // If authentication is successful, return the user object
    return user;
  }
}
