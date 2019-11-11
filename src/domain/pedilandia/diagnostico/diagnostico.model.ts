import { VacinaInput, VacinaUpdate } from './../vacina/vacina.model';
import { DoencaInput, DoencaUpdate } from './../doenca/doenca.model';
import { ConsultaAgendamentoInput, ConsultaAgendamentoUpdate } from './../consulta-agendamento/consulta-agendamento.model';
import { DiagnosticoTipoInput, DiagnosticoTipoUpdate } from './../diagnostico-tipo/diagnostico-tipo.model';
import { ExameUpdate, ExameInput } from './../exame/exame.model';
import * as mongoose from 'mongoose';

import { arrayProp, prop, Typegoose } from '@typegoose/typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { DiagnosticoTipo } from '../diagnostico-tipo/diagnostico-tipo.model';
import { ConsultaAgendamento } from '../consulta-agendamento/consulta-agendamento.model';
import { Doenca } from '../doenca/doenca.model';
import { Exame } from '../exame/exame.model';
import { Vacina } from '../vacina/vacina.model';
import { Medicamento } from '../medicamento/medicamento.model';
import { ConsultaAgendamentoDTO } from '../consulta-agendamento/consulta-agendamento.dto';

import { InputRef } from '../../../common/general/shared/input-ref.model';

@ObjectType()
export class Diagnostico {
    @prop({ required: true })
    @Field()
    descricao: string;
    
    @prop({ required: true, ref: DiagnosticoTipo })
    @Field(type => DiagnosticoTipo)
    tipo: DiagnosticoTipo;

    @prop({ required: false, ref: ConsultaAgendamentoDTO })
    @Field(type => ConsultaAgendamentoDTO, { nullable : true })
    remarcacaoConsulta : ConsultaAgendamentoDTO;

    /**
     * Doenças diagnosticadas anteriormente que agora
     * foram consideradas como curadas
     */
    @arrayProp({ required: false, itemsRef: Doenca })
    @Field(type => [Doenca])
    doencasCuradas : Doenca[];
    
    @arrayProp({ required: false, itemsRef: Doenca })
    @Field(type => [Doenca])
    doencasDiagnosticadas : Doenca[];

    @arrayProp({ required: false, itemsRef: Exame })
    @Field(type => [Exame])
    examesExigidos : Exame[];

    @arrayProp({ required: false, itemsRef: Vacina })
    @Field(type => [Vacina])
    vacinasExigidas : Vacina[];

    @arrayProp({ required: false, itemsRef: Medicamento })
    @Field(type => [Medicamento])
    medicamentosReceitados : Medicamento[];
}

@InputType()
export class DiagnosticoInput {
    @Field({ nullable: false })
    descricao: string;

    @Field(type => InputRef, { nullable: false })
    tipo: InputRef;

    @Field(type => InputRef, { nullable : true })
    remarcacaoConsulta : InputRef;

    @Field(type => [InputRef], { nullable : true })
    doencasCuradas : InputRef[];


    @Field(type => [InputRef], { nullable : true })
    doencasDiagnosticadas : InputRef[];

    @Field(type => [InputRef], { nullable : true })
    examesExigidos : InputRef[];

    @Field(type => [InputRef], { nullable : true })
    vacinasExigidas : InputRef[];
}

@InputType()
export class DiagnosticoUpdate {
    @Field({ nullable: true })
    descricao? : string;

    @Field(type => InputRef, { nullable: true })
    tipo? : InputRef;

    @Field(type => InputRef, { nullable : true })
    remarcacaoConsulta? : InputRef;

    @Field(type => [InputRef], { nullable : true })
    doencasCuradas? : InputRef[];

    @Field(type => [InputRef], { nullable : true })
    doencasDiagnosticadas? : InputRef[];

    @Field(type => [InputRef], { nullable : true })
    examesExigidos? : InputRef[];

    @Field(type => [InputRef], { nullable : true })
    vacinasExigidas? : InputRef[];
}

