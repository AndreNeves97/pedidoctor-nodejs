import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsOptional } from 'class-validator';
import { ObjectType, Field, InputType, ID } from 'type-graphql';

import { User, UserInputRef } from '../../../common/security/user/user.model';
import { Usuario } from '../usuario/usuario.model';
import { Diagnostico } from '../diagnostico/diagnostico.model';

/**
 * - Consulta de rotina
 * - Motivada por algum sintoma
 */
@ObjectType()
export class ConsultaTipo extends Typegoose{
    @Field()
    nome : string;
    @Field()
    descricao : string;
}

@InputType()
export class ConsultaTipoInput {
    @Field()
    nome : string;
    @Field()
    descricao : string;
}

@InputType()
export class ConsultaTipoUpdate {
    @Field()
    nome : string;
    @Field()
    descricao : string;
}


