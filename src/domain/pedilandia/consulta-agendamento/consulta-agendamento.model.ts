import { AgendamentoRealizacaoInput, AgendamentoRealizacaoUpdate } from './agendamento-realizacao.model';
import { AgendamentoRealizacao } from './agendamento-realizacao.model';
import { DiagnosticoInput, DiagnosticoUpdate } from './../diagnostico/diagnostico.model';
import { SintomaInput, SintomaUpdate } from './../sintoma/sintoma.model';
import { ConsultaTipoInput, ConsultaTipoUpdate } from './../consulta-tipo/consulta-tipo.model';
import { UsuarioInput, UsuarioUpdate } from './../usuario/usuario.model';
import * as mongoose from 'mongoose';

import { prop, Typegoose } from '@typegoose/typegoose';
import { IsString, IsOptional } from 'class-validator';
import { ObjectType, Field, InputType, ID } from 'type-graphql';

import { User, UserInputRef } from '../../../common/security/user/user.model';
import { Usuario } from '../usuario/usuario.model';
import { Diagnostico } from '../diagnostico/diagnostico.model';
import { ConsultaTipo } from '../consulta-tipo/consulta-tipo.model';
import { Sintoma } from '../sintoma/sintoma.model';
import { Clinica } from '../clinica/clinica.model';
import { InputRef } from '../../../common/general/shared/input-ref.model';

@ObjectType()
export class ConsultaAgendamento extends Typegoose {
    @Field()
    dataAgendada: Date;
    @Field(type => Usuario)
    paciente : Usuario;
    @Field(type => Clinica)
    clinica : Clinica;
    @Field(type => Usuario)
    medico : Usuario; 
    @Field(type => ConsultaTipo)
    tipo: ConsultaTipo;
    @Field(type => [Sintoma])
    sintomasObservados: Sintoma[];
    @Field(type => [String])
    informacoesAdicionais: string[];
    @Field(type => AgendamentoRealizacao)
    realizacao : AgendamentoRealizacao;
    @prop()
    @Field()
    createdAt: Date;
}

@InputType()
export class ConsultaAgendamentoInput {
    @Field()
    dataAgendada: Date;
    @Field(type => UsuarioInput)
    paciente : UsuarioInput;
    @Field(type => InputRef)
    clinica : InputRef;
    @Field(type => UsuarioInput)
    medico : UsuarioInput; 
    @Field(type => ConsultaTipoInput)
    tipo: ConsultaTipoInput;
    @Field(type => [SintomaInput])
    sintomasObservados: SintomaInput[];
    @Field(type => [String])
    informacoesAdicionais: string[];
    @Field(type => AgendamentoRealizacaoInput)
    realizacao : AgendamentoRealizacao;
    @Field()
    createdAt: Date;
}

@InputType()
export class ConsultaAgendamentoUpdate {
    @Field()
    dataAgendada: Date;
    @Field(type => UsuarioUpdate)
    paciente : UsuarioUpdate;
    @Field(type => InputRef)
    clinica : InputRef;
    @Field(type => UsuarioUpdate)
    medico : UsuarioUpdate; 
    @Field(type => ConsultaTipoUpdate)
    tipo: ConsultaTipoUpdate;
    @Field(type => [SintomaUpdate])
    sintomasObservados: SintomaUpdate[];
    @Field(type => [String])
    informacoesAdicionais: string[];
    @Field(type => AgendamentoRealizacaoUpdate)
    realizacao : AgendamentoRealizacaoUpdate;
    @Field()
    createdAt: Date;
}
    
