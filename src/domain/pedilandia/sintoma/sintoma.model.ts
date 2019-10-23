import * as mongoose from 'mongoose';

import {  Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { prop } from '@typegoose/typegoose';

@ObjectType()
export class Sintoma extends Typegoose {
    @Field(type => ID)
    _id: string;

    @Field()
    @prop({required : true})
    nome: string;
    
    @Field()
    @prop({required : true})
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
    @Field({nullable : true})
    nome: string;
    @Field({nullable : true})
    descricao: string;
}

