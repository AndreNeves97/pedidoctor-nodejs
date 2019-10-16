// ItemEstoque representa os itens fisicos no estoque, associando informacoes concretas a ItemEstoqueCategoria
// ItemEstoque serve tanto para abstrair produtos individuais, como lotes de determinado produto

//exemplo ItemEstoque
    // um lote de 5 produtos , que vieram do fornecedor Joaquim e vencem dia 23/05/2021
    // estes produtos tem uma categoria ItemEstoqueCategoria, que dizem q eles sao cervejas da marca skol e que elas tem 2,5 litros 

// Ja ItemEstoqueCategoria eh uma classificacao abstrata de itens fisicos

//exemplo ItemEstoqueCategoria
    //tipo cerveja
    //marca skol
    //tamanho 2,5
    //unidadeTamanho litros

//todos campos sao obrigatorios, por que um item deve ter suas caracteristicas basicas bem definidas
//tambem nao precisamos fazer referencias,para aproveitar o modelo orientado a documentos(estamos usando mongoDB)
//afinal, nada impede controle externo da entrada, como gerar um drop down de unidades de medidas

//em modelos orientados a documentos, eh trabalho da aplicacao manter a integridade
//utilizando referencias fariamos mais buscas, e internet eh lenta
//na hora de modificar ou excluir categorias(que acontece com menos frequencia), ai sim teria uma trabalho extra sem referencias



import * as mongoose from 'mongoose'

import { prop , Typegoose } from '@typegoose/typegoose';
import { IsString , IsPositive } from 'class-validator';
import { ObjectType , Field , InputType , ID , Float} from 'type-graphql';

@ObjectType()
export class ItemEstoqueCat extends Typegoose {
   @Field(type => ID)
   _id: string;

    @IsString()
    @prop({required:true})
    @Field()
    tipo: String;

    @IsString()
    @prop({required:true})
    @Field()
    marca: String;

    @IsPositive()
    @prop({required:true})
    @Field(type => Float)
    tamanho: number;

    @IsString()
    @prop({required:true})
    @Field()
    unidadeTamanho: String;
}

@InputType()
export class ItemEstoqueCatCreateInput {
    @Field()
    tipo: string;

    @Field()
    marca: string;

    @Field(type => Float)
    tamanho: number;

    @Field()
    unidadeTamanho: string;
}

@InputType()
export class ItemEstoqueCatUpdateInput {
    @Field({nullable:true})
    tipo: string;

    @Field({nullable:true})
    marca: string;

    @Field(type => Float,{nullable: true})
    tamanho: number;

    @Field({nullable:true})
    unidadeTamanho: string;
}
