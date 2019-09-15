import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';

@ObjectType("User")
@InputType("UserInput")
export class User extends Typegoose {
    @Field(type => ID)
    _id: string;

    @IsString()
    @prop({ required: true })
    firebaseUid: string;

    @IsString()
    @prop( { required: true })
    username: string

    @IsString()
    @prop( { required: true })
    password: string

    @IsString()
    @prop({ required: true })
    email: string;

    @IsString()
    @prop({ required: true })
    telefone: string;
}
