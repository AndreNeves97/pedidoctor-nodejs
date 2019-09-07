import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { FeastResolver } from './feast.resolvers';
import { UserService } from 'src/security/user.service';
import { EmpresaResolver } from './empresa/empresa.resolver';
import { EmpresaService } from './empresa/empresa.service';
import { SecurityModule } from 'src/security/security.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            playground: true,
            autoSchemaFile: 'graphql-generated-schema/feast.gql',  
            path: '/graphql/feast'
        }),        
    ],
    controllers: [],
    providers: [
        EmpresaResolver, EmpresaService
    ]
})
export class FeastModule {}
