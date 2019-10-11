import * as mongoose from 'mongoose';

import { prop, Typegoose } from 'typegoose';
import { IsString, IsArray } from 'class-validator';
import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { FileFirebaseStorage } from 'src/common/storage/file-firebase-storage.model';

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
export class AcontecimentoTipo extends Typegoose {
    categoria : CategoriaAcontecimentoTipo;
    nome : string;
    descricao : string;

    /**
     * Em caso de acontecimento que refira-se a uma habilidade
     * desenvolvida, considera-se a faixa de idade ideal (em meses)
     * que tal desenvolvimento deve acontecer 
     */
    idadePadraoMin : number;
    idadePadraoMax : number;

    /**
     * Usado em casos de alteração de peso ou altura
     */
    valoresReferenciaPorIdade : number;
}



export enum CategoriaAcontecimentoTipo {
    ALTERACAO_GERAL = 'alteracao-geral',
    DESENV_HABILID  = 'desenvolvimento-habilidade',
    ACOMENT_DOENCA  = 'acometimento-doenca'
}
