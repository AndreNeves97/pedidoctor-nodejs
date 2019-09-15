import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConsultasResolver } from './consultas/consultas.resolver';
import { ConsultasService } from './consultas/consultas.service';
import { tmpDir } from '../../common/config/config.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Consulta } from './consultas/consulta.model';

@Module({
  imports: [

    TypegooseModule.forFeature([{
      typegooseClass: Consulta,
      schemaOptions: {
        collection: 'Pedilandia_Consulta',
        timestamps: true
      }
    }]),

    // GraphQLModule.forRoot({
    //   playground: true,
    //   installSubscriptionHandlers: true,
    //   autoSchemaFile: `${tmpDir}/pedilandia.gql`,
    //   path: '/graphql/pedilandia',
    // })
  ],
  controllers: [],
  exports: [],
  providers: [
    ConsultasResolver, 
    ConsultasService
  ]
})
export class PedilandiaModule {}
