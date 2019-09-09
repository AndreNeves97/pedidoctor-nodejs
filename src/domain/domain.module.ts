import { Module } from '@nestjs/common';
import { FeastModule } from './feast/feast.module';
import { SupperModule } from './supper/supper.module';
import { PedilandiaModule } from './pedilandia/pedilandia.module';
import { ControleEstoqueModule } from './controle-estoque/controle-estoque.module';
import { AppService } from '../app.service';
import { AppModule } from '../app.module';
import { DomainService } from './domain.service';

@Module({
    imports: [
        PedilandiaModule,
        FeastModule,
        SupperModule,
        ControleEstoqueModule,

    ],
    providers: [
        DomainService
    ]
})
export class DomainModule {
}
