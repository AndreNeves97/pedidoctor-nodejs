import { AgendamentoRealizacaoInput, AgendamentoRealizacaoUpdate } from './agendamento-realizacao.model';
import { AgendamentoRealizacao } from './agendamento-realizacao.model';;
import { SintomaInput, SintomaUpdate } from './../sintoma/sintoma.model';
import { ConsultaTipoInput, ConsultaTipoUpdate } from './../consulta-tipo/consulta-tipo.model';
import { UsuarioInput, UsuarioUpdate, Usuario } from '../usuario/usuario.model';

import { arrayProp, prop, Typegoose, Ref } from '@typegoose/typegoose';
import { ObjectType, Field, InputType, ID, Int } from 'type-graphql';
import { ConsultaTipo } from '../consulta-tipo/consulta-tipo.model';
import { Sintoma } from '../sintoma/sintoma.model';
import { Clinica } from '../clinica/clinica.model';
import { InputRef } from '../../../common/general/shared/input-ref.model';
import { UsuarioDTO } from '../usuario/usuario.dto';
import { ClinicaDTO } from '../clinica/clinica.dto';

@ObjectType()
export class ConsultaAgendamento extends Typegoose {
    @Field(type => ID)
    _id: string;

    @prop({ required: true })
    @Field()
    dataAgendada: Date;

    @prop({ required: true, ref: UsuarioDTO })
    @Field(type => UsuarioDTO, { nullable : true })
    paciente : Ref<UsuarioDTO>;

    @prop({ required: true, ref: ClinicaDTO })
    @Field(type => ClinicaDTO)
    clinica : ClinicaDTO;
    
    @prop({ required: true, ref: UsuarioDTO })
    @Field(type => UsuarioDTO, { nullable : true })
    medico : Ref<UsuarioDTO>; 

    @prop({ required: true, ref: ConsultaTipo })
    @Field(type => ConsultaTipo)
    tipo: ConsultaTipo;

    @arrayProp({ itemsRef: Sintoma })
    @Field(type => [Sintoma])
    sintomasObservados: Sintoma[];

    @prop()
    @Field(type => [String])
    informacoesAdicionais: string[];

    @prop({ _id: false, required: false })
    @Field(type => AgendamentoRealizacao, { nullable: true})
    realizacao : AgendamentoRealizacao;
    
    @prop()
    @Field()
    createdAt: Date;
}

@InputType()
export class ConsultaAgendamentoInput {
    @Field()
    dataAgendada: Date;

    @Field(type => InputRef)
    paciente : InputRef;

    @Field(type => InputRef)
    clinica : InputRef;

    @Field(type => InputRef)
    medico : InputRef; 

    @Field(type => InputRef)
    tipo: InputRef;

    @Field(type => [InputRef])
    sintomasObservados: InputRef[];
    
    @Field(type => [String])
    informacoesAdicionais: string[];
}

@InputType()
export class ConsultaAgendamentoUpdate {
    @Field({ nullable: true })
    dataAgendada? : Date;

    @Field(type => InputRef, { nullable: true })
    paciente?: InputRef;

    @Field(type => InputRef, { nullable: true })
    clinica?: InputRef;

    @Field(type => InputRef, { nullable: true })
    medico?: InputRef; 

    @Field(type => InputRef, { nullable: true })
    tipo?: InputRef;

    @Field(type => [InputRef], { nullable: true })
    sintomasObservados?: InputRef[];
    
    @Field(type => [String], { nullable: true })
    informacoesAdicionais?: string[];

    @Field(type => AgendamentoRealizacaoInput, { nullable: true})
    realizacao?: AgendamentoRealizacaoInput;
}
    



@InputType()
export class SolicitacaoAgendamentoInput {
    @Field()
    dataAgendada: Date;


    @Field(type => InputRef)
    clinica : InputRef;

    @Field(type => InputRef)
    medico : InputRef; 

    @Field(type => InputRef)
    tipo: InputRef;

    @Field(type => [InputRef])
    sintomasObservados: InputRef[];
    
    @Field(type => [String])
    informacoesAdicionais: string[];
}
