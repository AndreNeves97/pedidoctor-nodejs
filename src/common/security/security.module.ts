import { Module } from '@nestjs/common';
import { SecurityService } from './security.service';
import { AuthModule } from './auth/auth.module';
import { FirebaseService } from '../firebase/firebase.service';
import { FirebaseModule } from '../firebase/firebase.module';
import { DomainModule, userServiceProvider } from '../../domain/domain.module';

@Module({
    imports: [
        AuthModule,
        FirebaseModule,
        DomainModule
    ],
    exports: [
        AuthModule,
        FirebaseService,
        userServiceProvider
    ],
    providers: [SecurityService, userServiceProvider, FirebaseService]

})
export class SecurityModule {}
