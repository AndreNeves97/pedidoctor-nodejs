import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Usuario } from '../usuario/usuario.model';

export class Clinica extends Typegoose {
    nome: string;

    endereco: string;

    googleMapsLocalId: string

    coordGeo: {lat: string, long: string};
    

    secretarios : Usuario[];
    medicos : Usuario[];
    enfermeiros : Usuario[];
    clientes : Usuario[];
}


