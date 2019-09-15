import { Module } from '@nestjs/common';
import { FeastModule } from './feast/feast.module';
import { SupperModule } from './supper/supper.module';
import { PedilandiaModule } from './pedilandia/pedilandia.module';
import { ControleEstoqueModule } from './controle-estoque/controle-estoque.module';
import { AppService } from '../app.service';
import { AppModule } from '../app.module';
import { DomainService } from './domain.service';
import { PagamentosModule } from './pagamentos/pagamentos.module';
import { GraphQLModule } from '@nestjs/graphql';
import { tmpDir } from '../common/config/config.service';
// import { CoreModule } from './core/core.module';

@Module({
    imports: [
        FeastModule,
        SupperModule,
        PedilandiaModule,
        ControleEstoqueModule,
        PagamentosModule,
        // CoreModule,
        GraphQLModule.forRoot({
            playground: true,
            installSubscriptionHandlers: true,
            autoSchemaFile: `${tmpDir}/feast.gql`,
            path: '/graphql',
        }),  

    ],
    providers: [
        DomainService
    ]
})
export class DomainModule {
}
