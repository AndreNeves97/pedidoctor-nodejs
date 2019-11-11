
import { prop, Typegoose } from '@typegoose/typegoose';
import { ObjectType, InputType, Field } from 'type-graphql';
import { Diagnostico, DiagnosticoUpdate, DiagnosticoInput } from './../diagnostico/diagnostico.model';
import { DiagnosticoDTO } from '../diagnostico/diagnostico.dto';


@ObjectType()
export class AgendamentoRealizacaoDTO {
    @prop({ required: true })
    @Field()
    horarioInicio: Date;

    @prop({ required: true })
    @Field()
    horarioFinalizacao : Date;
    
    @prop({ _id: false, required: true })
    @Field(type => DiagnosticoDTO)
    diagnostico: DiagnosticoDTO;
}