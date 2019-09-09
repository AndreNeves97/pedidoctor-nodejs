import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EmpresaService } from './empresa/empresa.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Empresa } from './empresa/empresa.model';
import { PraçaResolver } from './praça/praça.resolver';
import { EmpresaResolver } from './empresa/empresa.resolver';
import { PraçaService } from './praça/praça.service';
import { ProdutoResolver } from './produto/produto.resolver';
import { ProdutoService } from './produto/produto.service';
import { CategoriaProdutoService } from './categoria-produto/categoria-produto.service';
import { CategoriaProdutoResolver } from './categoria-produto/categoria-produto.resolver';
import { PromocaoService } from './promocao/promocao.service';
import { PromocaoResolver } from './promocao/promocao.resolver';
import { PedidoResolver } from './pedido/pedido.resolver';
import { PedidoService } from './pedido/pedido.service';
import { AppService } from '../../app.service';
import { AppModule } from '../../app.module';

@Module({
    imports: [

        TypegooseModule.forFeature([{
            typegooseClass: Empresa,
            schemaOptions: {
                collection: 'Feast_Empresa'
            }
        }]),

        
        GraphQLModule.forRoot({
            playground: true,
            installSubscriptionHandlers: true,

            autoSchemaFile: process.env.NODE_ENV == 'development'? 
                'src/generated/feast.gql' : '/tmp/dalpham/feast.gql',  
            path: '/graphql/feast',
            
            subscriptions: {
                path: '/graphql/feast',
                onConnect: (connectionParams, websocket) => {
                    console.log('subscription connected', connectionParams, websocket)
                }
            }
        }),        
    ],
    controllers: [],
    exports: [
    ],
    providers: [

        EmpresaResolver, EmpresaService, 
        PraçaResolver, PraçaService,
        ProdutoResolver, ProdutoService, 
        CategoriaProdutoService, CategoriaProdutoResolver, 
        PromocaoService, PromocaoResolver, PedidoResolver, PedidoService

    ]
})
export class FeastModule {
}
