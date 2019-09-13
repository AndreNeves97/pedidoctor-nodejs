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
import { ConfigService, database } from './common/config/config.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './common/security/user/roles.guard';


@Module({
    imports: [
        DomainModule,
        TypegooseModule.forRoot(database.uri),

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
        {
          provide: APP_GUARD,
          useClass: RolesGuard,
        },
        
        ConfigService,
        SecurityService, 
        MonitoringService, 
        DomainService, 
        AppService, 
        AuthService
    ],

})
export class AppModule { }
