import { UsuarioInput, UsuarioUpdate } from './../usuario/usuario.model';
import { CoordenadaGeografica, CoordenadaGeograficaInput, CoordenadaGeograficaUpdate } from './../util/coordenadaGeografica';
import * as mongoose from 'mongoose';

import { prop, Typegoose, arrayProp } from '@typegoose/typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Usuario } from '../usuario/usuario.model';
import { BaseUpdate } from '../../../common/general/shared/base-update.model';

@ObjectType()
export class Clinica extends Typegoose {
    @Field(type => ID)
    _id: string;

    @Field()
    @prop()
    nome: string;

    @Field()
    @prop()
    endereco: string;

    /**
     * TODO : Criar um modelo de localização
     */
    @Field(type => String, { nullable: true })
    @prop()
    googleMapsLocalId: string

    @Field(type => CoordenadaGeografica, { nullable: true })
    @prop()
    coordGeo: CoordenadaGeografica;

    @Field(type => [Usuario], { nullable: true })
    @arrayProp({ required: true, itemsRef: Usuario })
    secretarios : Usuario[];
    
    @Field(type => [Usuario], { nullable: true })
    @arrayProp({ required: true, itemsRef: Usuario })
    medicos : Usuario[];
    
    @Field(type => [Usuario], { nullable: true })
    @arrayProp({ required: true, itemsRef: Usuario })
    gerentes : Usuario[];
    
    @Field(type => [Usuario], { nullable: true })
    @arrayProp({ required: true, itemsRef: Usuario })
    clientes : Usuario[];
}

@InputType()
export class ClinicaCreateInput {
    @Field({ nullable: true })
    nome: string;
    @Field({ nullable: true })
    endereco: string;
    @Field({ nullable: true })
    googleMapsLocalId: string
    @Field(type => CoordenadaGeograficaInput, { nullable: true })
    coordGeo: CoordenadaGeograficaInput;
    @Field(type => [UsuarioInput], { nullable: true })
    secretarios : UsuarioInput[];
    @Field(type => [UsuarioInput], { nullable: true })
    medicos : UsuarioInput[];
    @Field(type => [UsuarioInput], { nullable: true })
    gerentes : UsuarioInput[];
    @Field(type => [UsuarioInput], { nullable: true })
    clientes : UsuarioInput[];
}

@InputType()
export class ClinicaUpdateInput extends BaseUpdate {
    @Field({ nullable: true })
    nome? : string;
    @Field({ nullable: true })
    endereco? : string;
    @Field({ nullable: true })
    googleMapsLocalId? : string
    @Field(type => CoordenadaGeograficaUpdate, { nullable: true })
    coordGeo? : CoordenadaGeograficaUpdate;
    @Field(type => [UsuarioUpdate], { nullable: true })
    secretarios? : UsuarioUpdate[];
    @Field(type => [UsuarioUpdate], { nullable: true })
    medicos? : UsuarioUpdate[];
    @Field(type => [UsuarioUpdate], { nullable: true })
    gerentes? : UsuarioUpdate[];
    @Field(type => [UsuarioUpdate], { nullable: true })
    clientes? : UsuarioUpdate[];
}

