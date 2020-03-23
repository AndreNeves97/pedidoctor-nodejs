import { Module } from '@nestjs/common';
import { PedilandiaModule } from './pedilandia/pedilandia.module';
import { DomainService } from './domain.service';
import { GraphQLModule } from '@nestjs/graphql';
import { tmpDir } from '../common/config/config.service';
import { UserService } from '../common/security/user/user.service';
import { UsuarioService } from './pedilandia/usuario/usuario.service';


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
        PedilandiaModule,
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
