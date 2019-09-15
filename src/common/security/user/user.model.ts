import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';

@ObjectType()
export class User extends Typegoose {
    @Field(type => ID)
    _id: string;

    @IsString()
    @prop({ required: true })
    firebaseUid: string;

    @IsString()
    @prop( { required: true })
    @Field()
    username: string

    @IsString()
    @prop( { required: true })
    password: string

    @IsString()
    @prop({ required: true })
    @Field()
    email: string;

    @IsString()
    @prop({ required: true })
    @Field()
    telefone: string;
}


@InputType()
export class UserInputRef extends Typegoose {
    @Field(type => ID)
    _id: string;
}