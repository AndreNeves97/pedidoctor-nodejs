import { DoencaInput, DoencaUpdate } from './../doenca/doenca.model';
import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Doenca } from '../doenca/doenca.model';

@ObjectType()
export class Medicamento extends Typegoose {
    @Field()
    nome: string;
    @Field()
    descricao: string;
    @Field(type => [Doenca])
    indicadoPara: Doenca[];
}

@InputType()
export class MedicamentoInput {
    @Field()
    nome: string;
    @Field()
    descricao: string;
    @Field(type => [DoencaInput])
    indicadoPara: Doenca[];
}

@InputType()
export class MedicamentoUpdate {
    @Field()
    nome: string;
    @Field()
    descricao: string;
    @Field(type => [DoencaUpdate])
    indicadoPara: Doenca[];
}