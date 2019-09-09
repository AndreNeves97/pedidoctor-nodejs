import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString } from 'class-validator';

export class User extends Typegoose {
    @IsString()
    @prop({ required: true })
    firebaseUid: string;

    @IsString()
    @prop({ required: true })
    email: string;

    @IsString()
    @prop({ required: true })
    telefone: string;
}
