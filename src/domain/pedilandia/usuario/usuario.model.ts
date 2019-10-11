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

export class Usuario extends Typegoose {
    /**
     * Usuário pode ser o pai ou a criança.
     * Se for criança, isPaciente = true
     */
    isPaciente: boolean;

    responsavelPor : Usuario[];

    usoMedicamentos : UsoMedicamento[];
    acontecimentos : Acontecimento[];
}



export class UsoMedicamento extends Typegoose {
    @prop({ required: true,  ref: Medicamento })
    medicamento: Medicamento;
    
    @prop({ required: true })
    dataInicio: Date;

    @prop({ required: true })
    dataFim: Date;
}
