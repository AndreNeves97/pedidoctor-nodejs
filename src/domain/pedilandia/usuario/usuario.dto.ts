import { UsoMedicamento } from './usomedicamento.model';

import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Acontecimento } from '../acontecimento/acontecimento.model';
import { Typegoose } from '@typegoose/typegoose';
import { Usuario } from './usuario.model';


@ObjectType()
export class UsuarioDTO  extends Typegoose { 
    @Field(type => ID)
    _id: string;

    firebaseUid: string;

    @Field()
    nome: string

    @Field()
    email: string;

    @Field({ nullable: true })
    telefone: string;

    @Field({ nullable: true })
    fotoUrl: string;

    @Field(type => [String], { nullable: false })
    roles: string[];

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

    
    @Field(type => [Usuario], { nullable: true} )
    responsavelPor : Usuario[];
    
    @Field(type => [UsoMedicamento], { nullable: true} )
    usoMedicamentos : UsoMedicamento[];

    @Field(type => [Acontecimento], { nullable: true} )
    acontecimentos : Acontecimento[];
}