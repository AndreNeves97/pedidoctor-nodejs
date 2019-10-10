import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsOptional } from 'class-validator';
import { ObjectType, Field, InputType, ID } from 'type-graphql';

import { User, UserInputRef } from '../../../common/security/user/user.model';
import { Usuario } from '../usuario/usuario.model';
import { Diagnostico } from '../diagnostico/diagnostico.model';

export class AgendamentoRealizacao extends Typegoose{
    horarioInicio: Date;
    horarioFinalizacao : Date;

    diagnostico: Diagnostico;
}
