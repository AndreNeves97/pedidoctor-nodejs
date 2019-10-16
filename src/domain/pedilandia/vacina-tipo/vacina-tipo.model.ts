import * as mongoose from 'mongoose';

import { prop, Typegoose } from '@typegoose/typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';

@ObjectType()
export class VacinaTipo extends Typegoose {
    @Field()
    nome: string;
    @Field()
    descricao: string;
}

@InputType()
export class VacinaTipoInput {
    @Field()
    nome: string;
    @Field()
    descricao: string;
}

@InputType()
export class VacinaTipoUpdate {
    @Field()
    nome: string;
    @Field()
    descricao: string;
}

