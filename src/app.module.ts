import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { TypegooseModule } from 'nestjs-typegoose';
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
import { UserOwnerRuleGuard } from './common/security/user/user-have-access.rule.guard';
import { JwtGuard } from './common/security/auth/jwt.guard';

@Module({
    imports: [
        DomainModule,
        TypegooseModule.forRoot(
            database.uri, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        ),

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
            useClass: JwtGuard,

        },
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
        {
            provide: APP_GUARD,
            useClass: UserOwnerRuleGuard,
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