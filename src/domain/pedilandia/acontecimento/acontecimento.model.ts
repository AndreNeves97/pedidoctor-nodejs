import { VacinaInput, VacinaUpdate } from './../vacina/vacina.model';
import { ExameInput, ExameUpdate } from './../exame/exame.model';
import { AcontecimentoTipoInput, AcontecimentoTipoUpdate } from './../acontecimento-tipo/acontecimento-tipo.model';
import { SintomaUpdate, SintomaInput } from './../sintoma/sintoma.model';
import { DoencaUpdate, DoencaInput } from './../doenca/doenca.model';
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

@ObjectType()
export class Acontecimento extends Typegoose {
    @Field()
    data : Date;
    @Field(type => AcontecimentoTipo)
    tipo : AcontecimentoTipo;
    @Field()
    observacoes : string;
    /**
     * Usado em casos de alteração de peso ou altura
     */
    @Field()
    valor : number;
    /**
     * Em casos de acometimento por doença
     */
    @Field(type => Doenca)
    doenca : Doenca;
    /**
     * Em casos de apresentação de algum sintoma
     */
    @Field(type => Sintoma)
    sintoma : Sintoma;
    /**
     * Usado em casos de realização de exame
     */
    @Field(type => Exame)
    exame : Exame;
    /**
     * Usado em casos de realização de vacinas
     */
    @Field(type => Vacina)
    vacina : Vacina;
}

@InputType()
export class AcontecimentoInput {
    @Field()
    data : Date;
    @Field(type => AcontecimentoTipoInput)
    tipo : AcontecimentoTipoInput;
    @Field()
    observacoes : string;
    @Field()
    valor : number;
    @Field(type => DoencaInput)
    doenca : DoencaInput;
    @Field(type => SintomaInput)
    sintoma : SintomaInput;
    @Field(type => ExameInput)
    exame : ExameInput;
    @Field(type => VacinaInput)
    vacina : VacinaInput;
}

@InputType()
export class AcontecimentoUpdate {
    @Field()
    data : Date;
    @Field(type => AcontecimentoTipoUpdate)
    tipo : AcontecimentoTipoUpdate;
    @Field()
    observacoes : string;
    @Field()
    valor : number;
    @Field(type => DoencaUpdate)
    doenca : DoencaUpdate;
    @Field(type => SintomaUpdate)
    sintoma : SintomaUpdate;
    @Field(type => ExameUpdate)
    exame : ExameUpdate;
    @Field(type => VacinaUpdate)
    vacina : VacinaUpdate;
}

