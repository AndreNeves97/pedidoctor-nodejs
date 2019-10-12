import { Module } from '@nestjs/common';
import { FeastModule } from './feast/feast.module';
import { SupperModule } from './supper/supper.module';
import { PedilandiaModule } from './pedilandia/pedilandia.module';
import { ControleEstoqueModule } from './controle-estoque/controle-estoque.module';
import { DomainService } from './domain.service';
import { PagamentosModule } from './pagamentos/pagamentos.module';
import { GraphQLModule } from '@nestjs/graphql';
import { tmpDir } from '../common/config/config.service';
import { UserService } from '../common/security/user/user.service';
import { UsuarioService } from './pedilandia/usuario/usuario.service';
// import { CoreModule } from './core/core.module';


/**
 * A classe provisionada depende de qual domínio de aplicação estará ativo.
 * Nesse caso, pedilândia
 */
export const userServiceProvider = {
    provide: UserService,
    useClass: UsuarioService
}

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
            context: ({ req }) => ({ req }),
        }),  

    ],
    exports: [
      PedilandiaModule
    ],
    providers: [
        DomainService
    ]
})
export class DomainModule {
}
