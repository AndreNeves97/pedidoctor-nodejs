import { DoencaInput, DoencaUpdate } from './../doenca/doenca.model';
import * as mongoose from 'mongoose';

import { arrayProp, prop } from '@typegoose/typegoose';
import { Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Doenca } from '../doenca/doenca.model';
import { InputRef } from '../../../common/general/shared/input-ref.model';

@ObjectType()
export class Medicamento extends Typegoose {
    @Field(type => ID)
    _id: string;
    
    @Field()
    @prop({required : true})
    nome: string;

    @Field()
    @prop({required : true})
    descricao: string;

    @Field(type => [Doenca])
    @arrayProp({required : true, itemsRef: Doenca})
    indicadoPara: Doenca[];
}

@InputType()
export class MedicamentoInput {
    @Field()
    nome: string;
    
    @Field()
    descricao: string;

    @Field(type => [InputRef])
    indicadoPara: InputRef[];
}

@InputType()
export class MedicamentoUpdate {
    @Field({nullable: true})
    nome: string;

    @Field({nullable: true})
    descricao: string;

    @Field(type => [InputRef], {nullable: true})
    indicadoPara: InputRef[];
}