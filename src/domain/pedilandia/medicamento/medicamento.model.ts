import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Doenca } from '../doenca/doenca.model';


export class Medicamento extends Typegoose {
    nome: string;
    descricao: string;

    indicadoPara: Doenca[];
}

