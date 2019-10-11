import { Medicamento, MedicamentoUpdate, MedicamentoInput } from './../medicamento/medicamento.model';
import { Typegoose, prop } from 'typegoose';
import { ObjectType, Field, InputType } from 'type-graphql';

@ObjectType()
export class UsoMedicamento extends Typegoose {
    @Field(type => Medicamento)
    @prop({ required: true,  ref: Medicamento })
    medicamento: Medicamento;
    
    @Field()
    @prop({ required: true })
    dataInicio: Date;

    @Field()
    @prop({ required: true })
    dataFim: Date;
}

@InputType()
export class UsoMedicamentoInput extends Typegoose {
    @Field(type => MedicamentoInput)
    medicamento: MedicamentoInput;
    @Field()
    dataInicio: Date;
    @Field()
    dataFim: Date;
}

@InputType()
export class UsoMedicamentoUpdate extends Typegoose {
    @Field(type => MedicamentoUpdate)
    medicamento: MedicamentoUpdate;
    @Field()
    dataInicio: Date;
    @Field()
    dataFim: Date;
}