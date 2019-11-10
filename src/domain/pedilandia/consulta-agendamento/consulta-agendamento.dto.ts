import { AgendamentoRealizacao } from './agendamento-realizacao.model';
import { prop, Typegoose } from '@typegoose/typegoose';
import { ObjectType, Field, InputType, ID, Int } from 'type-graphql';
import { ConsultaTipo } from '../consulta-tipo/consulta-tipo.model';
import { Sintoma } from '../sintoma/sintoma.model';
import { UsuarioDTO } from '../usuario/usuario.dto';
import { ClinicaDTO } from '../clinica/clinica.dto';
import { arrayProp } from 'typegoose';
import { AgendamentoRealizacaoDTO } from './agendamento-realizacao.dto';


@ObjectType()
export class ConsultaAgendamentoDTO extends Typegoose {
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
    @Field(type => AgendamentoRealizacaoDTO)
    realizacao : AgendamentoRealizacaoDTO;
    
    @prop()
    @Field()
    createdAt: Date;
}
