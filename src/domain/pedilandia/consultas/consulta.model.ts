import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsOptional } from 'class-validator';
import { ObjectType, Field, InputType, ID } from 'type-graphql';

import { User, UserInputRef } from '../../../common/security/user/user.model';

@ObjectType()
export class Consulta extends Typegoose{

    @Field(type => ID)
    _id: string;

    @prop({ required: true })
    @Field()
    dataConsulta: Date;

    @prop({ required: true })
    @Field()
    dataRegistro: Date;

    @prop({ required: true, ref: User })
    @Field(type => User)
    paciente: User;

    @prop({ required: true })
    @Field()
    tipoConsulta: string;

    @prop({ required: false })
    @Field(type => [String], { nullable: true })
    sintomasObservados: string[];
    
    @prop({ required: false })
    @Field(type => [String], { nullable: true })
    medicamentosQueToma: string[];

    @prop({ required: false })
    @Field(type => [String], { nullable: true })
    doencasRecentes: string[];

    @prop({ required: false })
    @Field(type => [String], { nullable: true })
    informacoesAdicionais: string[];

}

@InputType()
export class ConsultaCreateInput {
    @Field()
    dataConsulta: Date;

    @Field(type => UserInputRef)
    paciente: UserInputRef;

    @Field()
    tipoConsulta: string;

    @Field(type => [String], { nullable: true })
    sintomasObservados: string[];
    
    @Field(type => [String], { nullable: true })
    medicamentosQueToma: string[];

    @Field(type => [String], { nullable: true })
    doencasRecentes: string[];

    @Field(type => [String], { nullable: true })
    informacoesAdicionais: string[];
}