import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { tmpDir } from '../../common/config/config.service';
import { TypegooseModule } from 'nestjs-typegoose';



import { ConsultasResolver } from './consultas/consultas.resolver';
import { ClinicaResolver } from './clinica/clinica.resolver';


import { ConsultasService } from './consultas/consultas.service';
import { ClinicaService } from './clinica/clinica.service';


import { Usuario } from './usuario/usuario.model';
import { Consulta } from './consultas/consulta.model';
import { Clinica } from './clinica/clinica.model';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioResolver } from './usuario/usuario.resolver';
import { ConsultaTipoService } from './consulta-tipo/consulta-tipo.service';
import { ConsultaTipoResolver } from './consulta-tipo/consulta-tipo.resolver';
import { ConsultaTipo } from './consulta-tipo/consulta-tipo.model';
import { DiagnosticoTipoService } from './diagnostico-tipo/diagnostico-tipo.service';
import { DiagnosticoTipoResolver } from './diagnostico-tipo/diagnostico-tipo.resolver';
import { DiagnosticoTipo } from './diagnostico-tipo/diagnostico-tipo.model';
import { ExameTipoService } from './exame-tipo/exame-tipo.service';
import { ExameTipoResolver } from './exame-tipo/exame-tipo.resolver';
import { ExameTipo } from './exame-tipo/exame-tipo.model';
import { DoencaService } from './doenca/doenca.service';
import { DoencaResolver } from './doenca/doenca.resolver';
import { Doenca } from './doenca/doenca.model';

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

    TypegooseModule.forFeature([{
      typegooseClass: Usuario,
      schemaOptions: {
        collection: 'Pedilandia_Usuario',
        timestamps: true
      }
    }]),

    TypegooseModule.forFeature([{
      typegooseClass: ConsultaTipo,
      schemaOptions: {
        collection: 'Pedilandia_ConsultaTipo',
        timestamps: true
      }
    }]),

    TypegooseModule.forFeature([{
      typegooseClass: DiagnosticoTipo,
      schemaOptions: {
        collection: 'Pedilandia_DiagnosticoTipo',
        timestamps: true
      }
    }]),

    TypegooseModule.forFeature([{
      typegooseClass: ExameTipo,
      schemaOptions: {
        collection: 'Pedilandia_ExameTipo',
        timestamps: true
      }
    }]),

    TypegooseModule.forFeature([{
      typegooseClass: Doenca,
      schemaOptions: {
        collection: 'Pedilandia_Doenca',
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
    ConsultaTipoResolver,
    ClinicaResolver,
    DiagnosticoTipoResolver,
    DoencaResolver,
    ExameTipoResolver,
    UsuarioResolver,


    ConsultasService,
    ConsultaTipoService,
    ClinicaService,
    DiagnosticoTipoService,
    DoencaService,
    ExameTipoService,
    UsuarioService,
  
  ]
})
export class PedilandiaModule {}
