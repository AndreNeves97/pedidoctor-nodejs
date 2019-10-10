import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Clinica } from '../clinica/clinica.model';
import { InfoMedicamento } from './info-medicamento.model';

export class Usuario extends Typegoose {
    responsavelPor : Usuario[]

    agendamentos : string[];
    
    isPaciente: boolean;

    infoMedicamentos: InfoMedicamento[];
    
    doencasRecentes: string[];
}

