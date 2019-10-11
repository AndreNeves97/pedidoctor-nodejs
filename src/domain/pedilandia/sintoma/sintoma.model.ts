import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';

@ObjectType()
export class Sintoma extends Typegoose {
    @Field()
    nome: string;
    @Field()
    descricao: string;
}

@InputType()
export class SintomaInput extends Typegoose {
    @Field()
    nome: string;
    @Field()
    descricao: string;
}

@InputType()
export class SintomaUpdate extends Typegoose {
    @Field()
    nome: string;
    @Field()
    descricao: string;
}

