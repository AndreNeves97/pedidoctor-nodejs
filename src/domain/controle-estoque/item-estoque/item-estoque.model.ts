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

import { prop , Typegoose } from '@hasezoey/typegoose';
import { IsString , IsPositive , IsInt , ValidateNested } from 'class-validator';
import { ObjectType , Field , InputType , ID , Int} from 'type-graphql';

import { ItemEstoqueCat } from '../item-estoque-cat/item-estoque-cat.model';

@ObjectType()
export class ItemEstoque {
   @Field(type => ID)
   _id: string;

    @IsInt()
    @IsPositive()
    @prop({required:true})
    @Field(type => Int)
    quantidade: number;

    @IsString()
    @prop()
    @Field()
    fornecedor: String;

    @IsString()
    @prop()
    @Field()
    validade: string;

    @ValidateNested()
    @prop({required:true})
    @Field()
    categoria: ItemEstoqueCat;

}

@InputType()
export class ItemEstoqueCreateInput {
    @Field(type => Int)
    quantidade: number;

    @Field({nullable: true})
    fornecedor: string;

    @Field({nullable: true})
    validade: string;

    @Field(type => ItemEstoqueCat )
    categoria: ItemEstoqueCat;
}

@InputType()
export class ItemEstoqueUpdateInput {
    @Field(type => Int,{nullable: true})
    quantidade: number;

    @Field({nullable: true})
    fornecedor: string;

    @Field({nullable: true})
    validade: string;

    @Field(type => ItemEstoqueCat,{nullable: true} )
    categoria: ItemEstoqueCat;
}
