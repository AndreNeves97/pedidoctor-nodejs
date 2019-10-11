import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { tmpDir } from '../../common/config/config.service';
import { TypegooseModule } from 'nestjs-typegoose';



import { ConsultasResolver } from './consultas/consultas.resolver';
import { ClinicaResolver } from './clinica/clinica.resolver';


import { ConsultasService } from './consultas/consultas.service';
import { ClinicaService } from './clinica/clinica.service';


import { Consulta } from './consultas/consulta.model';
import { Clinica } from './clinica/clinica.model';

@Module({
  imports: [

    TypegooseModule.forFeature([{
      typegooseClass: Consulta,
      schemaOptions: {
        collection: 'Pedilandia_Consulta',
        timestamps: true
      }
    }]),

    TypegooseModule.forFeature([{
      typegooseClass: Clinica,
      schemaOptions: {
        collection: 'Pedilandia_Clinica',
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
    ClinicaResolver,

    ConsultasService,
    ClinicaService,
  
  ]
})
export class PedilandiaModule {}
