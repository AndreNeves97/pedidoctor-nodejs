import * as mongoose from 'mongoose';

import { Typegoose } from '@typegoose/typegoose';
import { InputType, Field, ID } from 'type-graphql';

export abstract class User extends Typegoose {
    _id: string;
    firebaseUid: string;
    nome: string;
    email: string;
    telefone: string;
    fotoUrl: string;
    roles: string[];
}


@InputType()
export class UserInputRef {
    constructor(_id: string) {
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


export abstract class UserInput {
    nome: string
    email: string;
}



export abstract class UserUpdate {
    nome: string
    email: string;
}



