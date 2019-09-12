import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';

import { TypegooseModule } from 'nestjs-typegoose';
import { GraphQLModule } from '@nestjs/graphql';
import { SecurityModule } from './common/security/security.module';
import { ConfigModule } from './common/config/config.module';
import { FirebaseModule } from './common/firebase/firebase.module';
import { MonitoringModule } from './common/monitoring/monitoring.module';
import { MonitoringService } from './common/monitoring/monitoring.service';
import { SecurityService } from './common/security/security.service';
import { DomainService } from './domain/domain.service';
import { AuthService } from './common/security/auth/auth.service';
import { ConfigService } from './common/config/config.service';


@Module({
    imports: [
        DomainModule,

        //mongodb://localhost/nest  
        //mongodb://dalpham-admin:as2rk_13rf@ds131237.mlab.com:31237/dalpham-team-development
        TypegooseModule.forRoot('mongodb://dalpham-admin:as2rk_13rf@ds131237.mlab.com:31237/dalpham-team-development'),

        SecurityModule,
        ConfigModule,
        FirebaseModule,
        MonitoringModule
    ],
    exports: [
        AppService
    ],
    controllers: [AppController],
    providers: [
        ConfigService,
        SecurityService, 
        MonitoringService, 
        DomainService, 
        AppService, 
        AuthService
    ],

})
export class AppModule { }
