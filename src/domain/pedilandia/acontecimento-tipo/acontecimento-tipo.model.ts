import * as mongoose from 'mongoose';

import { prop, Typegoose } from '@typegoose/typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID, registerEnumType } from 'type-graphql';

/**
 * Tipos de informação sobre desenvolvimento:
 *
 *  - Alterações gerais:
 *      - Alteração de peso
 *      - Alteração de altura
 *      - Alteração de IMC
 * 
 *  - Desenvolvimento de habilidades (instrumento de vigilância do desenvolvimento):
 *      - Fala
 *      - Capacidade de manter-se de pé
 *      - Capacidade de andar
 *      - Controle urinário
 *      - Leitura e escrita
 *      - Tocar algum instrumento musical
 *      - Andar de bicicleta
 * 
 *  - Acometimento por doença
 * 
 *  - Realização de exame
 * 
 *  - Apresentação de sintomas de doenças
 *    - Febre
 *    - Exemplo: Sintomas de autismo
 *      - Hipersensibilidade a determinados tipos de sons
 */
export enum CategoriaAcontecimentoTipo {
    ALTERACAO_GERAL = 'alteracao-geral',
    DESENV_HABILID  = 'desenvolvimento-habilidade',
    ACOMENT_DOENCA  = 'acometimento-doenca'
}

registerEnumType(CategoriaAcontecimentoTipo, { name : 'CategoriaAcontecimentoTipo' });


@ObjectType()
export class AcontecimentoTipo extends Typegoose {
    @Field(type => CategoriaAcontecimentoTipo)
    categoria : CategoriaAcontecimentoTipo;
    @Field()
    nome : string;
    @Field()
    descricao : string;

    /**
     * Em caso de acontecimento que refira-se a uma habilidade
     * desenvolvida, considera-se a faixa de idade ideal (em meses)
     * que tal desenvolvimento deve acontecer 
     */
    @Field()
    idadePadraoMin : number;
    @Field()
    idadePadraoMax : number;

    /**
     * Usado em casos de alteração de peso ou altura
     */
    @Field()
    valoresReferenciaPorIdade : number;
}



@InputType()
export class AcontecimentoTipoInput {
    @Field(type => CategoriaAcontecimentoTipo)
    categoria : CategoriaAcontecimentoTipo;
    @Field()
    nome : string;
    @Field()
    descricao : string;
    @Field()
    idadePadraoMin : number;
    @Field()
    idadePadraoMax : number;
    @Field()
    valoresReferenciaPorIdade : number;
}

@InputType()
export class AcontecimentoTipoUpdate {
    @Field(type => CategoriaAcontecimentoTipo)
    categoria : CategoriaAcontecimentoTipo;
    @Field()
    nome : string;
    @Field()
    descricao : string;
    @Field()
    idadePadraoMin : number;
    @Field()
    idadePadraoMax : number;
    @Field()
    valoresReferenciaPorIdade : number;
}