import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';

import { TypegooseModule } from 'nestjs-typegoose';


@Module({
    imports: [
        DomainModule,
        //mongodb://localhost/nest  
        //mongodb://dalpham-admin:as2rk_13rf@ds131237.mlab.com:31237/dalpham-team-development
        TypegooseModule.forRoot('mongodb://dalpham-admin:as2rk_13rf@ds131237.mlab.com:31237/dalpham-team-development')
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
