import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';

@ObjectType()
export class User extends Typegoose {
    @Field(type => ID)
    _id: string;

    @IsString()
    @prop()
    firebaseUid: string;

    @IsString()
    @prop( { required: true } )
    @Field()
    nome: string

    @IsString()
    @prop({ required: true, unique: true })
    @Field()
    email: string;

    @IsString()
    @prop({ required: false })
    @Field({ nullable: true })
    telefone: string;

    @IsString()
    @prop({ required: false })
    @Field({ nullable: true })
    fotoUrl: string;

    @IsArray()
    @prop({ required: false })
    @Field(type => [String], { nullable: false })
    roles: string[];
}


@InputType()
export class UserInputRef extends Typegoose {
    constructor(_id: string) {
        super();
        this._id = _id;
    }

    @Field(type => ID)
    _id: string;
}

export class UserCreateFromFirebaseInput {    
    firebaseUid: string;
    nome: string
    email: string;
    fotoUrl: string;
    roles: string[];
}


@InputType()
export class ClienteCreateInput {
    @Field(type => String, { nullable: false })
    nome: string

    @Field(type => String, { nullable: false })
    email: string;
}



@InputType()
export class UserUpdateInput {
    @Field(type => String, { nullable: true })
    nome: string

    @Field(type => String, { nullable: true })
    email: string;
}



