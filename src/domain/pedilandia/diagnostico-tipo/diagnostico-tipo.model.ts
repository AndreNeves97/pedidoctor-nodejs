import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';


/**
 * - Saúde em boas condições
 * - Diagnosticada alguma doença
 * - Exigiu algum exame para um diagnóstico completo
 */
@ObjectType()
export class DiagnosticoTipo extends Typegoose {
    @Field()
    nome: string;
    @Field()
    descricao: string;
}

@InputType()
export class DiagnosticoTipoInput {
    @Field()
    nome: string;
    @Field()
    descricao: string;
}

@InputType()
export class DiagnosticoTipoUpdate {
    @Field()
    nome: string;
    @Field()
    descricao: string;
}

