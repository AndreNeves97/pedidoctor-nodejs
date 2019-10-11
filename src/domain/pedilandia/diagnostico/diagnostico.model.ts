import { VacinaInput, VacinaUpdate } from './../vacina/vacina.model';
import { DoencaInput, DoencaUpdate } from './../doenca/doenca.model';
import { ConsultaAgendamentoInput, ConsultaAgendamentoUpdate } from './../consulta-agendamento/consulta-agendamento.model';
import { DiagnosticoTipoInput, DiagnosticoTipoUpdate } from './../diagnostico-tipo/diagnostico-tipo.model';
import { ExameUpdate, ExameInput } from './../exame/exame.model';
import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { DiagnosticoTipo } from '../diagnostico-tipo/diagnostico-tipo.model';
import { ConsultaAgendamento } from '../consulta-agendamento/consulta-agendamento.model';
import { Doenca } from '../doenca/doenca.model';
import { Exame } from '../exame/exame.model';
import { Vacina } from '../vacina/vacina.model';
import { Medicamento } from '../medicamento/medicamento.model';

@ObjectType()
export class Diagnostico extends Typegoose {
    @Field()
    descricao: string;
    @Field(type => DiagnosticoTipo)
    tipo: DiagnosticoTipo;
    @Field(type => ConsultaAgendamento, { nullable : true })
    remarcacaoConsulta : ConsultaAgendamento;


    /**
     * Doenças diagnosticadas anteriormente que agora
     * foram consideradas como curadas
     */
    @Field(type => [Doenca])
    doencasCuradas : Doenca[];
    
    /**
     * Usado em caso de haver algum diagnóstico anterior no qual
     * foram reportados problemas específicas, e de acordo com o 
     * diagnóstico atual, foram dadas como resolvidos
     */
    @Field(type => Diagnostico)
    diagnosticosAnterioresResolvidos : Diagnostico;
    @Field(type => [Doenca])
    doencasDiagnosticadas : Doenca[];
    @Field(type => [Exame])
    examesExigidos : Exame[];
    @Field(type => [Vacina])
    vacinasExigidas : Vacina[];
    medicamentosReceitados : Medicamento[];
}

@InputType()
export class DiagnosticoInput {
    @Field(type => [DoencaInput])
    doencasCuradas : DoencaInput[];
    @Field(type => DiagnosticoInput)
    diagnosticosAnterioresResolvidos : DiagnosticoInput;
    @Field()
    descricao: string;
    @Field(type => DiagnosticoTipoInput)
    tipo: DiagnosticoTipoInput;
    @Field(type => ConsultaAgendamentoInput, { nullable : true })
    remarcacaoConsulta : ConsultaAgendamentoInput;
    @Field(type => [DoencaInput])
    doencasDiagnosticadas : DoencaInput[];
    @Field(type => [ExameInput])
    examesExigidos : ExameInput[];
    @Field(type => [VacinaInput])
    vacinasExigidas : VacinaInput[];
}

@InputType()
export class DiagnosticoUpdate {
    @Field(type => [DoencaUpdate])
    doencasCuradas : DoencaUpdate[];
    @Field(type => DiagnosticoUpdate)
    diagnosticosAnterioresResolvidos : DiagnosticoUpdate;
    @Field()
    descricao: string;
    @Field(type => DiagnosticoTipoUpdate)
    tipo: DiagnosticoTipoUpdate;
    @Field(type => ConsultaAgendamentoUpdate, { nullable : true })
    remarcacaoConsulta : ConsultaAgendamentoUpdate;
    @Field(type => [DoencaUpdate])
    doencasDiagnosticadas : DoencaUpdate[];
    @Field(type => [ExameUpdate])
    examesExigidos : ExameUpdate[];
    @Field(type => [VacinaUpdate])
    vacinasExigidas : VacinaUpdate[];
}

