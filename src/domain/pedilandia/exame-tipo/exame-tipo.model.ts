import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Sintoma } from '../sintoma/sintoma.model';

@ObjectType()
export class ExameTipo extends Typegoose {
    @Field()
    nome: string;
    @Field()
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
    @Field()
    nome: string;
    @Field()
    descricao: string;
}

