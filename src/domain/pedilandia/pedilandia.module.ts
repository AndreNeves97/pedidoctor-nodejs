import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';



import { ClinicaResolver } from './clinica/clinica.resolver';
import { ConsultasResolver } from './consultas/consultas.resolver';
import { ConsultaTipoResolver } from './consulta-tipo/consulta-tipo.resolver';
import { DiagnosticoTipoResolver } from './diagnostico-tipo/diagnostico-tipo.resolver';
import { DoencaResolver } from './doenca/doenca.resolver';
import { ExameTipoResolver } from './exame-tipo/exame-tipo.resolver';
import { MedicamentoResolver } from './medicamento/medicamento.resolver';
import { SintomaResolver } from './sintoma/sintoma.resolver';
import { UsuarioResolver } from './usuario/usuario.resolver';


import { ClinicaService } from './clinica/clinica.service';
import { ConsultasService } from './consultas/consultas.service';
import { ConsultaTipoService } from './consulta-tipo/consulta-tipo.service';
import { DiagnosticoTipoService } from './diagnostico-tipo/diagnostico-tipo.service';
import { DoencaService } from './doenca/doenca.service';
import { ExameTipoService } from './exame-tipo/exame-tipo.service';
import { MedicamentoService } from './medicamento/medicamento.service';
import { SintomaService } from './sintoma/sintoma.service';
import { UsuarioService } from './usuario/usuario.service';


import { Clinica } from './clinica/clinica.model';
import { Consulta } from './consultas/consulta.model';
import { ConsultaTipo } from './consulta-tipo/consulta-tipo.model';
import { DiagnosticoTipo } from './diagnostico-tipo/diagnostico-tipo.model';
import { Doenca } from './doenca/doenca.model';
import { ExameTipo } from './exame-tipo/exame-tipo.model';
import { Medicamento } from './medicamento/medicamento.model';
import { Sintoma } from './sintoma/sintoma.model';
import { Usuario } from './usuario/usuario.model';
import { ConsultaAgendamento } from './consulta-agendamento/consulta-agendamento.model';
import { UsuarioDTO } from './usuario/usuario.dto';
import { ClinicaDTO } from './clinica/clinica.dto';
import { ConsultaAgendamentoDTO } from './consulta-agendamento/consulta-agendamento.dto';
import { ConsultaAgendamentoService } from './consulta-agendamento/consulta-agendamento.service';
import { ConsultaAgendamentoResolver } from './consulta-agendamento/consulta-agendamento.resolver';

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
      typegooseClass: ConsultaAgendamento,
      schemaOptions: {
        collection: 'Pedilandia_ConsultaAgendamento',
        timestamps: true
      }
    }]),

    TypegooseModule.forFeature([{
      typegooseClass: ConsultaAgendamentoDTO,
      schemaOptions: {
        collection: 'Pedilandia_ConsultaAgendamento',
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
      typegooseClass: ClinicaDTO,
      schemaOptions: {
        collection: 'Pedilandia_Clinica',
        timestamps: true
      }
    }]),

    TypegooseModule.forFeature([{
        typegooseClass: UsuarioDTO,
        schemaOptions: {
          collection: 'Pedilandia_Usuario',
          timestamps: true
        }
    }]),
    
    // TODO: Criar índice único para firebaseUid
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

    TypegooseModule.forFeature([{
      typegooseClass: Sintoma,
      schemaOptions: {
        collection: 'Pedilandia_Sintoma',
        timestamps: true
      }
    }]),

    TypegooseModule.forFeature([{
      typegooseClass: Medicamento,
      schemaOptions: {
        collection: 'Pedilandia_Medicamento',
        timestamps: true
      }
    }]),

  ],
  controllers: [],
  exports: [
    // userModelModule,
    TypegooseModule,
    UsuarioService,
    ClinicaService
  ],
  providers: [


    ConsultasResolver, 
    ConsultaTipoResolver,
    ClinicaResolver,
    DiagnosticoTipoResolver,
    DoencaResolver,
    ExameTipoResolver,
    MedicamentoResolver,
    SintomaResolver,
    UsuarioResolver,


    ConsultasService,
    ConsultaTipoService,
    ClinicaService,
    DiagnosticoTipoService,
    DoencaService,
    ExameTipoService,
    MedicamentoService,
    SintomaService,
    UsuarioService,
    ConsultaAgendamentoService,
    ConsultaAgendamentoResolver,
  
  ]
})
export class PedilandiaModule {}
