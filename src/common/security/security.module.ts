import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './user/user.model'
import { SecurityService } from './security.service';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { FirebaseService } from '../firebase/firebase.service';
import { FirebaseModule } from '../firebase/firebase.module';

@Module({
    imports: [
        AuthModule,
        UserModule,
        FirebaseModule,
    ],
    exports: [
        AuthModule,
        UserService,
        FirebaseService

    ],
    providers: [SecurityService, UserService, FirebaseService]

})
export class SecurityModule {}
