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
export class ConsultaTipo extends Typegoose{
    nome : string;
    descricao : string;
}


