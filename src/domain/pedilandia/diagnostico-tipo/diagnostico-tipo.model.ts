import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';


/**
 * - Saúde em boas condições
 * - Diagnosticada alguma doença
 * - Exigiu algum exame para um diagnóstico completo
 */
export class DiagnosticoTipo extends Typegoose {
    nome: string;
    descricao: string;
}

