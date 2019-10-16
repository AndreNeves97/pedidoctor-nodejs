import { VacinaUpdate, VacinaInput } from './../vacina/vacina.model';
import * as mongoose from 'mongoose';

import { prop, Typegoose } from '@typegoose/typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Vacina } from '../vacina/vacina.model';

@ObjectType()
export class VacinaAplicacao extends Typegoose {
    data : Date;
    vacina : Vacina;
}

@InputType()
export class VacinaAplicacaoInput {
    @Field()
    data : Date;
    @Field(type => VacinaInput)
    vacina : VacinaInput;
}

@InputType()
export class VacinaAplicacaoUpdate {
    @Field()
    data : Date;
    @Field(type => VacinaUpdate)
    vacina : VacinaUpdate;
}

