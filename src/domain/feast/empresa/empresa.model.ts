
import * as mongoose from 'mongoose';

import { prop, Typegoose } from '@hasezoey/typegoose';
import { IsString } from 'class-validator';
import { ObjectType, Field, InputType, ID } from 'type-graphql';

@ObjectType()
export class Empresa  {
    @Field(type => ID)
    _id: string;

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

    // imagemFirebase: FileFirebaseStorage;
}


@InputType()
export class EmpresaCreateInput {
    @Field()
    nome: string;

    @Field()
    endereco: string;

    @Field()
    imagem: string;
}

@InputType()
export class EmpresaUpdateInput {
    @Field({ nullable: true })
    nome: string;

    @Field({ nullable: true })
    endereco: string;

    @Field({ nullable: true })
    imagem: string;
}