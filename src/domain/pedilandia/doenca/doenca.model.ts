import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Sintoma } from '../sintoma/sintoma.model';


export class Doenca extends Typegoose {
    nome: string;
    descricao: string;

    sintomas: Sintoma[];
}

