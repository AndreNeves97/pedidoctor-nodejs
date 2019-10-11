import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { FileFirebaseStorage } from 'src/common/storage/file-firebase-storage.model';
import { Usuario } from '../../usuario/usuario.model';
import { Comentario } from '../comentario/comentario.model';
import { Acontecimento } from '../../acontecimento/acontecimento.model';


export class Publicacao extends Typegoose {
    autor: Usuario;
    
    midias : FileFirebaseStorage[];
    legenda : String;
    
    /**
     * Comemorando;
     * Sentindo-se feliz com ...
     * 
     */
    sentimento: string;

    marcacoes : Usuario[];

    /**
     * TODO : Criar um modelo de localização
     */
    local : string;

    acontecimento : Acontecimento;
    
    tags: string[];


    comentarios : Comentario[];

    curtidas : Usuario[];

    @prop()
    @Field()
    createdAt: Date;
}

