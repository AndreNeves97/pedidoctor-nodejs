import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { FileFirebaseStorage } from 'src/common/storage/file-firebase-storage.model';
import { AcontecimentoTipo } from '../acontecimento-tipo/acontecimento-tipo.model';
import { Exame } from '../exame/exame.model';
import { Vacina } from '../vacina/vacina.model';
import { ConsultaAgendamento } from '../consulta-agendamento/consulta-agendamento.model';
import { Doenca } from '../doenca/doenca.model';
import { Sintoma } from '../sintoma/sintoma.model';

export class Acontecimento extends Typegoose {
    data : Date;
    tipo : AcontecimentoTipo;
    observacoes : string;


    /**
     * Usado em casos de alteração de peso ou altura
     */
    valor : number;

    /**
     * Em casos de acometimento por doença
     */
    doenca : Doenca;


    /**
     * Em casos de apresentação de algum sintoma
     */
    sintoma : Sintoma;
    
    /**
     * Usado em casos de realização de exame
     */
    exame : Exame;


    /**
     * Usado em casos de realização de vacinas
     */
    vacina : Vacina;
    
}

