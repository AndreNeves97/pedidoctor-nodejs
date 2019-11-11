import { VacinaInput, VacinaUpdate } from './../vacina/vacina.model';
import { DoencaInput, DoencaUpdate } from './../doenca/doenca.model';
import { ConsultaAgendamentoInput, ConsultaAgendamentoUpdate } from './../consulta-agendamento/consulta-agendamento.model';
import { DiagnosticoTipoInput, DiagnosticoTipoUpdate } from './../diagnostico-tipo/diagnostico-tipo.model';
import { ExameUpdate, ExameInput } from './../exame/exame.model';
import * as mongoose from 'mongoose';

import { prop, Typegoose } from '@typegoose/typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { DiagnosticoTipo } from '../diagnostico-tipo/diagnostico-tipo.model';
import { ConsultaAgendamento } from '../consulta-agendamento/consulta-agendamento.model';
import { Doenca } from '../doenca/doenca.model';
import { Exame } from '../exame/exame.model';
import { Vacina } from '../vacina/vacina.model';
import { Medicamento } from '../medicamento/medicamento.model';
import { ConsultaAgendamentoDTO } from '../consulta-agendamento/consulta-agendamento.dto';
import { arrayProp } from 'typegoose';

@ObjectType()
export class DiagnosticoDTO extends Typegoose {
    @prop({ required: true })
    @Field()
    descricao: string;
    
    @prop({ required: true, ref: DiagnosticoTipo })
    @Field(type => DiagnosticoTipo)
    tipo: DiagnosticoTipo;


    /**
     * Doenças diagnosticadas anteriormente que agora
     * foram consideradas como curadas
     */
    @prop({ required: true, ref: Doenca })
    @Field(type => [Doenca])
    doencasCuradas : Doenca[];
    

    @arrayProp({ itemsRef: Doenca })
    @Field(type => [Doenca])
    doencasDiagnosticadas : Doenca[];

    @prop()
    @Field(type => [Exame])
    examesExigidos : Exame[];

    @arrayProp({ itemsRef: Vacina })
    @Field(type => [Vacina])
    vacinasExigidas : Vacina[];

    @arrayProp({ itemsRef: Medicamento })
    @Field(type => [Medicamento])
    medicamentosReceitados : Medicamento[];
}