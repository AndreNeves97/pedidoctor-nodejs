import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { VacinaTipo } from '../vacina-tipo/vacina-tipo.model';
import { Doenca } from '../doenca/doenca.model';


export class Vacina extends Typegoose {
    nome : string;
    descricao : string;
    tipo: VacinaTipo;
    doencasEvitadas : Doenca[];
}

