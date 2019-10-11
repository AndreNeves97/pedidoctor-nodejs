import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsOptional } from 'class-validator';
import { ObjectType, Field, InputType, ID } from 'type-graphql';

import { User, UserInputRef } from '../../../common/security/user/user.model';
import { Usuario } from '../usuario/usuario.model';
import { Diagnostico } from '../diagnostico/diagnostico.model';
import { ConsultaTipo } from '../consulta-tipo/consulta-tipo.model';
import { Sintoma } from '../sintoma/sintoma.model';
import { Clinica } from '../clinica/clinica.model';

export class ConsultaAgendamento extends Typegoose{
    dataAgendada: Date;
    
    paciente : Usuario;
    
    clinica : Clinica;
    medico : Usuario; 

    tipo: ConsultaTipo;

    sintomasObservados: Sintoma[];
    
    informacoesAdicionais: string[];

    realizacao : AgendamentoRealizacao;
    


    @prop()
    @Field()
    createdAt: Date;
}


export class AgendamentoRealizacao extends Typegoose{
    horarioInicio: Date;
    horarioFinalizacao : Date;

    diagnostico: Diagnostico;
}
