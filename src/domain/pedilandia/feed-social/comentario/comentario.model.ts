import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { FileFirebaseStorage } from 'src/common/storage/file-firebase-storage.model';
import { Usuario } from '../../usuario/usuario.model';


export class Comentario extends Typegoose {
    autor: Usuario;

    midia : FileFirebaseStorage;
    texto : String;
    
    respostas : Comentario[];

    /**
     * Para saber se o comentário já é resposta de outro
     * comentário. Não permitir mais de um nível de respostas
     */
    isResposta : boolean;

    marcacoes : Usuario[];
    comentarios : Comentario[];
    tags: string[];



    @prop()
    @Field()
    createdAt: Date;
}

