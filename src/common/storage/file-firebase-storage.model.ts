import * as mongoose from 'mongoose';

import { prop, Typegoose } from '@hasezoey/typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';

export class FileFirebaseStorage extends Typegoose {
    internalUrl : string;
    downloadUrl : string;
}

