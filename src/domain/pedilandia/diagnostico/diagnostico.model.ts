import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { DiagnosticoTipo } from '../diagnostico-tipo/diagnostico-tipo.model';
import { ConsultaAgendamento } from '../consulta-agendamento/consulta-agendamento.model';
import { Doenca } from '../doenca/doenca.model';
import { Exame } from '../exame/exame.model';
import { Vacina } from '../vacina/vacina.model';


export class Diagnostico extends Typegoose {
    descricao: string;
    tipo: DiagnosticoTipo;

    remarcacaoConsulta : ConsultaAgendamento;

    doencasDiagnosticadas : Doenca[];
    examesExigidos : Exame[];
    vacinasExigidas : Vacina[];
}

