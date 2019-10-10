import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';


export class VacinaTipo extends Typegoose {
    nome: string;
    descricao: string;
}

