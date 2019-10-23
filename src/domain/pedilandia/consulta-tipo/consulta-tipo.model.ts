import * as mongoose from 'mongoose';

import { prop } from '@typegoose/typegoose';
import { Typegoose } from 'typegoose';
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
    @Field(type => ID)
    _id: string;

    @Field()
    @prop({required : true})
    nome : string;

    @prop({required : true})
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
    @Field({nullable : true})
    nome : string;
    @Field({nullable : true})
    descricao : string;
}


