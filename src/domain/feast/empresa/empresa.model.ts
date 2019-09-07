
import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString } from 'class-validator';
import { FileFirebaseStorage } from 'src/utils/firebase/storage/file';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Empresa extends Typegoose {

    @IsString()
    @prop({ required: true })
    @Field()
    nome: string;

    @IsString()
    @prop({ required: true })
    @Field()
    endereco: string;

    @IsString()
    @prop({ required: true })
    @Field()
    imagem: string;

    imagemFirebase: FileFirebaseStorage;

}
