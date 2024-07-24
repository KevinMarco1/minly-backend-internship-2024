import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { FirebaseAdminService } from './firebase.auth.service';
import { FirebaseAuthGuard } from './guards/firebase.guard';
import { FirebaseAuthStrategy } from './strategy/firebase.strategy';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule] ,
  controllers: [AuthController],
  providers: [FirebaseAdminService,FirebaseAuthGuard,FirebaseAuthStrategy, AuthService]
})
export class AuthModule {}
