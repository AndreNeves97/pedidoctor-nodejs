import * as mongoose from 'mongoose';

import { arrayProp, prop } from '@typegoose/typegoose';
import { Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';


/**
 * - Saúde em boas condições
 * - Diagnosticada alguma doença
 * - Exigiu algum exame para um diagnóstico completo
 */
@ObjectType()
export class DiagnosticoTipo extends Typegoose {
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
export class DiagnosticoTipoInput {
    @Field()
    nome: string;
    @Field()
    descricao: string;
}

@InputType()
export class DiagnosticoTipoUpdate {
    @Field({nullable: true})
    nome: string;

    @Field({nullable: true})
    descricao: string;
}

