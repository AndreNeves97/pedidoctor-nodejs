import { ConsultaAgendamentoInput, ConsultaAgendamentoUpdate } from './../consulta-agendamento/consulta-agendamento.model';
import { DiagnosticoUpdate, DiagnosticoInput } from './../diagnostico/diagnostico.model';
import { ExameTipoInput, ExameTipoUpdate } from './../exame-tipo/exame-tipo.model';
import * as mongoose from 'mongoose';

import { prop, Typegoose } from '@typegoose/typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Sintoma } from '../sintoma/sintoma.model';
import { ExameTipo } from '../exame-tipo/exame-tipo.model';
import { ConsultaAgendamento } from '../consulta-agendamento/consulta-agendamento.model';
import { Diagnostico } from '../diagnostico/diagnostico.model';
import { DiagnosticoDTO } from '../diagnostico/diagnostico.dto';
import { InputRef } from '../../../common/general/shared/input-ref.model';

@ObjectType()
export class Exame extends Typegoose {
    @Field(type => ExameTipo)
    tipo : ExameTipo;
    
}

@InputType()
export class ExameInput {
    @Field(type => InputRef)
    tipo : InputRef;
}

@InputType()
export class ExameUpdate {
    @Field(type => InputRef)
    tipo : InputRef;
}

