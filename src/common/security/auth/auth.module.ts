import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { userServiceProvider, DomainModule } from '../../../domain/domain.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { FirebaseService } from '../../firebase/firebase.service';
import { FirebaseModule } from '../../firebase/firebase.module';
import { FirebaseStrategy } from './firebase.strategy';


@Module({
    imports: [
        FirebaseModule,
        PassportModule,
        DomainModule
    ],
    providers: [
        AuthService,
        userServiceProvider,

        JwtStrategy,
        FirebaseStrategy,
        
        FirebaseService
    ],  

    exports: [AuthService],
    
})
export class AuthModule 
{}
// implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//         consumer
//         .apply(LoggerMiddleware)
//         .forRoutes(
//             { path: 'me', method: RequestMethod.GET },
//             { path: 'graphql', method: RequestMethod.POST },
//             { path: 'graphql', method: RequestMethod.GET }
//         );
//     }
// }
