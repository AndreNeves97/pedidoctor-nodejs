import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { FileFirebaseStorage } from 'src/common/storage/file-firebase-storage.model';
import { Usuario } from '../../usuario/usuario.model';
import { Comentario } from '../comentario/comentario.model';


export class Publicacao extends Typegoose {
    fotos : FileFirebaseStorage[];
    legenda : String;
    comentarios : Comentario[];
    
    reacoes: string[];
    tags: string[];

    autor: Usuario;


    @prop()
    @Field()
    createdAt: Date;
}

