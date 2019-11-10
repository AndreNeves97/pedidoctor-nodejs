import { UsuarioInput, UsuarioUpdate } from './../usuario/usuario.model';
import { CoordenadaGeografica, CoordenadaGeograficaInput, CoordenadaGeograficaUpdate } from './../util/coordenadaGeografica';
import * as mongoose from 'mongoose';

import { prop, Typegoose, arrayProp } from '@typegoose/typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Usuario } from '../usuario/usuario.model';

@ObjectType()
export class ClinicaDTO extends Typegoose {
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
    @prop()
    secretarios : Usuario[];
    
    @Field(type => [Usuario], { nullable: true })
    @prop()
    medicos : Usuario[];
    
    @Field(type => [Usuario], { nullable: true })
    @prop()
    enfermeiros : Usuario[];
    
    @Field(type => [Usuario], { nullable: true })
    @prop()
    clientes : Usuario[];
}