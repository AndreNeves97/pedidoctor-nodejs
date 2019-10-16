import { UsuarioInput, UsuarioUpdate } from './../usuario/usuario.model';
import { CoordenadaGeografica, CoordenadaGeograficaInput, CoordenadaGeograficaUpdate } from './../util/coordenadaGeografica';
import * as mongoose from 'mongoose';

import { prop, Typegoose } from '@hasezoey/typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Usuario } from '../usuario/usuario.model';

@ObjectType()
export class Clinica {
    @Field()
    nome: string;
    @Field()
    endereco: string;

    /**
     * TODO : Criar um modelo de localização
     */
    @Field()
    googleMapsLocalId: string
    @Field(type => CoordenadaGeografica)
    coordGeo: CoordenadaGeografica;
    @Field(type => [Usuario])
    secretarios : Usuario[];
    @Field(type => [Usuario])
    medicos : Usuario[];
    @Field(type => [Usuario])
    enfermeiros : Usuario[];
    @Field(type => [Usuario])
    clientes : Usuario[];
}

@InputType()
export class ClinicaInput {
    @Field()
    nome: string;
    @Field()
    endereco: string;
    @Field()
    googleMapsLocalId: string
    @Field(type => CoordenadaGeograficaInput)
    coordGeo: CoordenadaGeograficaInput;
    @Field(type => [UsuarioInput])
    secretarios : UsuarioInput[];
    @Field(type => [UsuarioInput])
    medicos : UsuarioInput[];
    @Field(type => [UsuarioInput])
    enfermeiros : UsuarioInput[];
    @Field(type => [UsuarioInput])
    clientes : UsuarioInput[];
}

@InputType()
export class ClinicaUpdate {
    @Field()
    nome: string;
    @Field()
    endereco: string;
    @Field()
    googleMapsLocalId: string
    @Field(type => CoordenadaGeograficaUpdate)
    coordGeo: CoordenadaGeograficaUpdate;
    @Field(type => [UsuarioUpdate])
    secretarios : UsuarioUpdate[];
    @Field(type => [UsuarioUpdate])
    medicos : UsuarioUpdate[];
    @Field(type => [UsuarioUpdate])
    enfermeiros : UsuarioUpdate[];
    @Field(type => [UsuarioUpdate])
    clientes : UsuarioUpdate[];
}

@InputType()
export class ClinicaCreateInput {
    @Field()
    nome: string;
    @Field()
    endereco: string;
    @Field()
    googleMapsLocalId: string
    @Field(type => CoordenadaGeograficaInput)
    coordGeo: CoordenadaGeograficaInput;
    @Field(type => [UsuarioInput], { nullable: true })
    secretarios : UsuarioInput[];
    @Field(type => [UsuarioInput], { nullable: true })
    medicos : UsuarioInput[];
    @Field(type => [UsuarioInput], { nullable: true })
    enfermeiros : UsuarioInput[];
    @Field(type => [UsuarioInput], { nullable: true })
    clientes : UsuarioInput[];
}

@InputType()
export class ClinicaUpdateInput {
    @Field()
    nome: string;
    @Field()
    endereco: string;
    @Field()
    googleMapsLocalId: string
    @Field(type => CoordenadaGeograficaUpdate)
    coordGeo: CoordenadaGeograficaUpdate;
    @Field(type => [UsuarioUpdate], { nullable: true })
    secretarios : UsuarioUpdate[];
    @Field(type => [UsuarioUpdate], { nullable: true })
    medicos : UsuarioUpdate[];
    @Field(type => [UsuarioUpdate], { nullable: true })
    enfermeiros : UsuarioUpdate[];
    @Field(type => [UsuarioUpdate], { nullable: true })
    clientes : UsuarioUpdate[];
}

