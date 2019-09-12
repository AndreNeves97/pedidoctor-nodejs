import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule, JwtModuleOptions, JwtService } from '@nestjs/jwt';
import { ConfigModule } from 'src/common/config/config.module';
import { ConfigService } from '../../config/config.service';
import { UserService } from '../user/user.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { FirebaseService } from '../../firebase/firebase.service';
import { FirebaseModule } from '../../firebase/firebase.module';

@Module({
    imports: [
        UserModule,
        FirebaseModule,
        PassportModule
    ],
    providers: [
        AuthService,
        UserService,
        LocalStrategy,
        JwtStrategy,
        FirebaseService

    ],

    exports: [AuthService],
    
})
export class AuthModule { }
