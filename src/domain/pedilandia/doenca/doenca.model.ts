import { SintomaUpdate, SintomaInput } from './../sintoma/sintoma.model';
import * as mongoose from 'mongoose';

import { Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Sintoma } from '../sintoma/sintoma.model';
import { InputRef } from '../../../common/general/shared/input-ref.model';
import { arrayProp, prop } from '@typegoose/typegoose';

@ObjectType()
export class Doenca extends Typegoose {
    @Field(type => ID)
    _id: string;

    @Field()
    @prop({required : true})
    nome: string;

    @Field()
    @prop({required : true})
    descricao: string;

    @Field(type => [Sintoma])
    @arrayProp({required : true, itemsRef: Sintoma})
    sintomas: Sintoma[];
}

@InputType()
export class DoencaInput extends Typegoose {
    @Field()
    nome: string;

    @Field()
    descricao: string;

    @Field(type => [InputRef])
    sintomas: InputRef[];
}

@InputType()
export class DoencaUpdate extends Typegoose {
    @Field({nullable: true})
    nome: string;

    @Field({nullable: true})
    descricao: string;

    @Field(type => [InputRef], {nullable: true})
    sintomas: InputRef[];
}
