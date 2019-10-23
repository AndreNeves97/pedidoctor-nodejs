import * as mongoose from 'mongoose';

import { arrayProp, prop } from '@typegoose/typegoose';
import { Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Sintoma } from '../sintoma/sintoma.model';

@ObjectType()
export class ExameTipo extends Typegoose {
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
export class ExameTipoInput {
    @Field()
    nome: string;
    @Field()
    descricao: string;
}

@InputType()
export class ExameTipoUpdate {
    @Field({nullable: true})
    nome: string;
    @Field({nullable: true})
    descricao: string;
}

