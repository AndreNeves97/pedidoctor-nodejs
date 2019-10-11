import { SintomaUpdate, SintomaInput } from './../sintoma/sintoma.model';
import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Sintoma } from '../sintoma/sintoma.model';

@ObjectType()
export class Doenca extends Typegoose {
    @Field()
    nome: string;
    @Field()
    descricao: string;
    @Field(type => [Sintoma])
    sintomas: Sintoma[];
}

@InputType()
export class DoencaInput extends Typegoose {
    @Field()
    nome: string;
    @Field()
    descricao: string;
    @Field(type => [SintomaInput])
    sintomas: SintomaInput[];
}

@InputType()
export class DoencaUpdate extends Typegoose {
    @Field()
    nome: string;
    @Field()
    descricao: string;
    @Field(type => [SintomaUpdate])
    sintomas: SintomaUpdate[];
}
