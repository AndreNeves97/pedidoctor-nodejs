import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EmpresaResolver } from './empresa/empresa.resolver';
import { EmpresaService } from './empresa/empresa.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Empresa } from './empresa/empresa.model';

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

            autoSchemaFile: 'graphql-generated-schema/feast.gql',  
            path: '/graphql/feast'
        }),        
    ],
    controllers: [],
    providers: [
        EmpresaService, EmpresaResolver
    ]
})
export class FeastModule {}
