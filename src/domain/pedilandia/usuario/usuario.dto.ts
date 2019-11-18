import { UsoMedicamento } from './usomedicamento.model';

import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Acontecimento } from '../acontecimento/acontecimento.model';
import { prop, Typegoose, arrayProp } from '@typegoose/typegoose';
import { Usuario } from './usuario.model';


@ObjectType()
export class UsuarioDTO  extends Typegoose { 
    @Field(type => ID)
    _id: string;

    @prop()
    firebaseUid: string;

    @prop( { required: true } )
    @Field()
    nome: string

    @prop({ required: true, unique: true })
    @Field()
    email: string;

    @prop({ required: true, unique: true })
    @Field()
    senha: string;

    @prop({ required: false })
    @Field({ nullable: true })
    telefone: string;

    @prop({ required: false })
    @Field({ nullable: true })
    fotoUrl: string;

    @prop({ required: false })
    @Field(type => [String], { nullable: false })
    roles: string[];

    @prop({ required: true })
    @Field(type => Int)
    tipo: number = 0;

    @Field(type => Int, { nullable: true })
    qtConsultas: number;
    
    /**
     * Usuário pode ser o pai ou a criança.
     * Se for criança, isPaciente = true
     */
    @Field()
    isPaciente: boolean;

    

    @arrayProp({ itemsRef: UsuarioDTO, required: true })
    @Field(type => [Usuario], { nullable: true} )
    responsavelPor : Usuario[];
    
    @arrayProp({ itemsRef: UsoMedicamento, required: true })
    @Field(type => [UsoMedicamento], { nullable: true} )
    usoMedicamentos : UsoMedicamento[];

    @Field(type => [Acontecimento], { nullable: true} )
    acontecimentos : Acontecimento[];
}