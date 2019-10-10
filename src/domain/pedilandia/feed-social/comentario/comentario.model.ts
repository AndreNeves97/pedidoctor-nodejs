import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { FileFirebaseStorage } from 'src/common/storage/file-firebase-storage.model';
import { Usuario } from '../../usuario/usuario.model';


export class Comentario extends Typegoose {
    autor: Usuario;

    @prop()
    @Field()
    createdAt: Date;
}

