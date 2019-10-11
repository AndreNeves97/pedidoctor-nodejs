import { UsoMedicamentoInput, UsoMedicamentoUpdate } from './usomedicamento.model';
import { UsoMedicamento } from './usomedicamento.model';
import { AcontecimentoInput, AcontecimentoUpdate } from './../acontecimento/acontecimento.model';
import { MedicamentoInput, MedicamentoUpdate } from './../medicamento/medicamento.model';
import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Clinica } from '../clinica/clinica.model';
import { Acontecimento } from '../acontecimento/acontecimento.model';
import { Medicamento } from '../medicamento/medicamento.model';
import { Exame } from '../exame/exame.model';
import { Vacina } from '../vacina/vacina.model';
import { ConsultaAgendamento } from '../consulta-agendamento/consulta-agendamento.model';

@ObjectType()
export class Usuario extends Typegoose {
    /**
     * Usuário pode ser o pai ou a criança.
     * Se for criança, isPaciente = true
     */
    @Field()
    isPaciente: boolean;
    
    @Field(type => [Usuario])
    responsavelPor : Usuario[];
    
    @Field(type => [UsoMedicamento])
    usoMedicamentos : UsoMedicamento[];

    @Field(type => [Acontecimento])
    acontecimentos : Acontecimento[];
}

@InputType()
export class UsuarioInput {
    @Field()
    isPaciente: boolean;
    @Field(type => [UsuarioInput] )
    responsavelPor : Usuario[];
    @Field(type => [UsoMedicamentoInput])
    usoMedicamentos : UsoMedicamentoInput[];
    @Field(type => [AcontecimentoInput])
    acontecimentos : AcontecimentoInput[];
}

@InputType()
export class UsuarioUpdate {
    @Field()
    isPaciente: boolean;
    @Field(type => [UsuarioUpdate])
    responsavelPor : Usuario[];
    @Field(type => [UsoMedicamentoUpdate])
    usoMedicamentos : UsoMedicamentoUpdate[];
    @Field(type => [AcontecimentoUpdate])
    acontecimentos : AcontecimentoUpdate[];
}

