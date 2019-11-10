import { AgendamentoRealizacaoInput, AgendamentoRealizacaoUpdate } from './agendamento-realizacao.model';
import { AgendamentoRealizacao } from './agendamento-realizacao.model';;
import { SintomaInput, SintomaUpdate } from './../sintoma/sintoma.model';
import { ConsultaTipoInput, ConsultaTipoUpdate } from './../consulta-tipo/consulta-tipo.model';
import { UsuarioInput, UsuarioUpdate, Usuario } from '../usuario/usuario.model';

import { prop, Typegoose } from '@typegoose/typegoose';
import { ObjectType, Field, InputType, ID, Int } from 'type-graphql';
import { ConsultaTipo } from '../consulta-tipo/consulta-tipo.model';
import { Sintoma } from '../sintoma/sintoma.model';
import { Clinica } from '../clinica/clinica.model';
import { InputRef } from '../../../common/general/shared/input-ref.model';
import { UsuarioDTO } from '../usuario/usuario.dto';
import { ClinicaDTO } from '../clinica/clinica.dto';
import { arrayProp } from 'typegoose';

@ObjectType()
export class ConsultaAgendamento extends Typegoose {
    @Field()
    dataAgendada: Date;

    @prop({ required: true, ref: UsuarioDTO })
    @Field(type => UsuarioDTO, { nullable : true })
    paciente : UsuarioDTO;

    @prop({ required: true, ref: ClinicaDTO })
    @Field(type => ClinicaDTO)
    clinica : ClinicaDTO;
    
    @prop({ required: true, ref: UsuarioDTO })
    @Field(type => UsuarioDTO, { nullable : true })
    medico : UsuarioDTO; 

    @prop({ required: true, ref: ConsultaTipo })
    @Field(type => ConsultaTipo)
    tipo: ConsultaTipo;

    @arrayProp({ itemsRef: Sintoma })
    @Field(type => [Sintoma])
    sintomasObservados: Sintoma[];

    @prop()
    @Field(type => [String])
    informacoesAdicionais: string[];

    @prop()
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
    
