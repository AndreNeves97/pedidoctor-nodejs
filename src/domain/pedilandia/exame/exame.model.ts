import { ConsultaAgendamentoInput, ConsultaAgendamentoUpdate } from './../consulta-agendamento/consulta-agendamento.model';
import { DiagnosticoUpdate, DiagnosticoInput } from './../diagnostico/diagnostico.model';
import { ExameTipoInput, ExameTipoUpdate } from './../exame-tipo/exame-tipo.model';
import * as mongoose from 'mongoose';

import { prop, Typegoose } from '@hasezoey/typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Sintoma } from '../sintoma/sintoma.model';
import { ExameTipo } from '../exame-tipo/exame-tipo.model';
import { ConsultaAgendamento } from '../consulta-agendamento/consulta-agendamento.model';
import { Diagnostico } from '../diagnostico/diagnostico.model';

@ObjectType()
export class Exame {
    @Field(type => ExameTipo)
    tipo : ExameTipo;
    @Field(type => ConsultaAgendamento)
    consultaParaApresentacao : ConsultaAgendamento;
    @Field(type => Diagnostico)
    diagnostico : Diagnostico;
}

@InputType()
export class ExameInput {
    @Field(type => ExameTipoInput)
    tipo : ExameTipoInput;
    @Field(type => ConsultaAgendamentoInput)
    consultaParaApresentacao : ConsultaAgendamentoInput;
    @Field(type => DiagnosticoInput)
    diagnostico : DiagnosticoInput;
}

@InputType()
export class ExameUpdate {
    @Field(type => ExameTipoUpdate)
    tipo : ExameTipoUpdate;
    @Field(type => ConsultaAgendamentoUpdate)
    consultaParaApresentacao : ConsultaAgendamentoUpdate;
    @Field(type => DiagnosticoUpdate)
    diagnostico : DiagnosticoUpdate;
}

