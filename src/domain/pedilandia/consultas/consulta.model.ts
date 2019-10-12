import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsOptional } from 'class-validator';
import { ObjectType, Field, InputType, ID } from 'type-graphql';

import { User, UserInputRef } from '../../../common/security/user/user.model';
import { Usuario } from '../usuario/usuario.model';

@ObjectType()
export class Consulta extends Typegoose{

    @Field(type => ID)
    _id: string;

    @prop({ required: true })
    @Field()
    dataConsulta: Date;

    @prop({ required: true, ref: Usuario })
    @Field(type => Usuario)
    paciente: Usuario;

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


    @prop()
    @Field(type => Boolean, { nullable: true })
    realizada: boolean;

    @prop()
    @Field(type => String, { nullable: true })
    observacoesMedico: string;


    @prop()
    @Field()
    createdAt: Date;

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


@InputType()
export class AgendamentoCreateInput {
    @Field()
    dataConsulta: Date;

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


@InputType()
export class ConsultaUpdateInput {

    @Field(type => Date, { nullable: true })
    dataConsulta: Date;

    @Field(type => String, { nullable: true })
    tipoConsulta: string;

    @Field(type => [String], { nullable: true })
    sintomasObservados: string[];
    
    @Field(type => [String], { nullable: true })
    medicamentosQueToma: string[];

    @Field(type => [String], { nullable: true })
    doencasRecentes: string[];

    @Field(type => [String], { nullable: true })
    informacoesAdicionais: string[];


    @Field(type => Boolean, { nullable: true })
    realizada: boolean;

    @Field(type => String, { nullable: true })
    observacoesMedico: string;
}
