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


export class Diagnostico extends Typegoose {
    descricao: string;
    tipo: DiagnosticoTipo;

    remarcacaoConsulta : ConsultaAgendamento;


    /**
     * Doenças diagnosticadas anteriormente que agora
     * foram consideradas como curadas
     */
    doencasCuradas : Doenca[];
    
    /**
     * Usado em caso de haver algum diagnóstico anterior no qual
     * foram reportados problemas específicas, e de acordo com o 
     * diagnóstico atual, foram dadas como resolvidos
     */
    diagnosticosAnterioresResolvidos : Diagnostico;

    doencasDiagnosticadas : Doenca[];
    examesExigidos : Exame[];
    vacinasExigidas : Vacina[];
    medicamentosReceitados : Medicamento[];
}

