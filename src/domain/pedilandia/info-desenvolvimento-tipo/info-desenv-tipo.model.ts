import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { FileFirebaseStorage } from 'src/common/storage/file-firebase-storage.model';

/**
 * Tipos de informação sobre desenvolvimento:
 *
 *  - Alterações gerais:
 *      - Alteração de peso
 *      - Alteração de altura
 * 
 *  - Desenvolvimento de habilidades:
 *      - Fala
 *      - Capacidade de manter-se de pé
 *      - Capacidade de andar
 *      - Controle urinário
 *      - Leitura e escrita
 *      - Tocar algum instrumento musical
 *      - Andar de bicicleta
 */
export class InfoDesenvolvimentoTipo extends Typegoose {    
}

