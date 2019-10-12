import { UsoMedicamentoInput, UsoMedicamentoUpdate } from './usomedicamento.model';
import { UsoMedicamento } from './usomedicamento.model';
import { AcontecimentoInput, AcontecimentoUpdate } from './../acontecimento/acontecimento.model';

import { ObjectType, InputType, Field, ID } from 'type-graphql';
import { Acontecimento } from '../acontecimento/acontecimento.model';
import { User, UserUpdate, UserInput } from '../../../common/security/user/user.model';

@ObjectType()
export class Usuario extends User {
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
export class UsuarioInput extends UserInput {
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
export class UsuarioUpdate extends UserUpdate {
    @Field()
    isPaciente: boolean;
    @Field(type => [UsuarioUpdate])
    responsavelPor : Usuario[];
    @Field(type => [UsoMedicamentoUpdate])
    usoMedicamentos : UsoMedicamentoUpdate[];
    @Field(type => [AcontecimentoUpdate])
    acontecimentos : AcontecimentoUpdate[];
}

