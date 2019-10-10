import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Sintoma } from '../sintoma/sintoma.model';
import { ExameTipo } from '../exame-tipo/exame-tipo.model';
import { ConsultaAgendamento } from '../consulta-agendamento/consulta-agendamento.model';


export class Exame extends Typegoose {
    tipo : ExameTipo;
    consultaParaApresentacao : ConsultaAgendamento;
}

