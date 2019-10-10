import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Vacina } from '../vacina/vacina.model';


export class VacinaAplicacao extends Typegoose {
    data : Date;
    vacina : Vacina;
}

