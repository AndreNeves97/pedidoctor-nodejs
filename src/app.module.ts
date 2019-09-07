import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';

import { TypegooseModule } from 'nestjs-typegoose';
import { GraphQLModule } from '@nestjs/graphql';
import { SecurityModule } from './security/security.module';


@Module({
    imports: [
        DomainModule,

        //mongodb://localhost/nest  
        //mongodb://dalpham-admin:as2rk_13rf@ds131237.mlab.com:31237/dalpham-team-development
        TypegooseModule.forRoot('mongodb://dalpham-admin:as2rk_13rf@ds131237.mlab.com:31237/dalpham-team-development'),
        
        SecurityModule
    ],
    exports: [
        SecurityModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
