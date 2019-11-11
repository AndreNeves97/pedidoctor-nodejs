
import { prop, Typegoose } from '@typegoose/typegoose';
import { ObjectType, InputType, Field } from 'type-graphql';
import { Diagnostico, DiagnosticoUpdate, DiagnosticoInput } from './../diagnostico/diagnostico.model';

@ObjectType()
export class AgendamentoRealizacao {
    @prop({ required: true })
    @Field()
    horarioInicio: Date;

    @prop({ required: true })
    @Field()
    horarioFinalizacao : Date;
    
    @prop({ _id: false, required: true })
    @Field(type => Diagnostico)
    diagnostico: Diagnostico;
}
    
@InputType()
export class AgendamentoRealizacaoInput {
    @Field()
    horarioInicio: Date;
    @Field()
    horarioFinalizacao : Date;

    @Field(type => DiagnosticoInput)
    diagnostico: DiagnosticoInput;
}
    
@InputType()
export class AgendamentoRealizacaoUpdate {
    @Field()
    horarioInicio: Date;
    @Field()
    horarioFinalizacao : Date;
    @Field(type => DiagnosticoUpdate)
    diagnostico: DiagnosticoUpdate;
}