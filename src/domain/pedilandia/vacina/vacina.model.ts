import { VacinaTipoInput, VacinaTipoUpdate } from './../vacina-tipo/vacina-tipo.model';
import { DoencaInput, DoencaUpdate } from './../doenca/doenca.model';
import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { VacinaTipo } from '../vacina-tipo/vacina-tipo.model';
import { Doenca } from '../doenca/doenca.model';

@ObjectType()
export class Vacina extends Typegoose {
    @Field()
    nome : string;
    @Field()
    descricao : string;
    @Field(type => VacinaTipo)
    tipo: VacinaTipo;
    @Field(type => [Doenca])
    doencasEvitadas : Doenca[];
}

@InputType()
export class VacinaInput {
    @Field()
    nome : string;
    @Field()
    descricao : string;
    @Field(type => VacinaTipoInput)
    tipo: VacinaTipo;
    @Field(type => [DoencaInput])
    doencasEvitadas : DoencaInput[];
}

@InputType()
export class VacinaUpdate {
    @Field()
    nome : string;
    @Field()
    descricao : string;
    @Field(type => VacinaTipoUpdate)
    tipo: VacinaTipo;
    @Field(tyoe => [DoencaUpdate])
    doencasEvitadas : DoencaUpdate[];
}

