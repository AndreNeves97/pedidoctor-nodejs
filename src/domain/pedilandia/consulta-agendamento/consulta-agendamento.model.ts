import { AgendamentoRealizacaoInput, AgendamentoRealizacaoUpdate } from './agendamento-realizacao.model';
import { AgendamentoRealizacao } from './agendamento-realizacao.model';;
import { SintomaInput, SintomaUpdate } from './../sintoma/sintoma.model';
import { ConsultaTipoInput, ConsultaTipoUpdate } from './../consulta-tipo/consulta-tipo.model';
import { UsuarioInput, UsuarioUpdate } from '../usuario/usuario.model';

import { prop, Typegoose } from '@typegoose/typegoose';
import { ObjectType, Field, InputType, ID, Int } from 'type-graphql';
import { ConsultaTipo } from '../consulta-tipo/consulta-tipo.model';
import { Sintoma } from '../sintoma/sintoma.model';
import { Clinica } from '../clinica/clinica.model';
import { InputRef } from '../../../common/general/shared/input-ref.model';
import { UsuarioDTO } from '../usuario/usuario.dto';

@ObjectType()
export class ConsultaAgendamento extends Typegoose {
    @Field()
    dataAgendada: Date;

    @prop({ required: true })
    @Field(type => UsuarioDTO, { nullable : true })
    paciente : UsuarioDTO;

    @Field(type => Clinica)
    clinica : Clinica;
    
    @prop({ required: true })
    @Field(type => UsuarioDTO, { nullable : true })
    medico : UsuarioDTO; 

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
    
