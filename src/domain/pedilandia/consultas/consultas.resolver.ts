import { Resolver, Query, Args, Mutation, Subscription, Context } from '@nestjs/graphql';
import { Consulta, ConsultaCreateInput, AgendamentoCreateInput, ConsultaUpdateInput } from './consulta.model';
import { ConsultasService } from './consultas.service';
import { UseGuards, SetMetadata } from '@nestjs/common';
import { Roles, RolesGuard } from '../../../common/security/user/roles.guard';
import { UserOwnerRule } from '../../../common/security/user/user-owner.rule.guard';
import { UserInputRef } from '../../../common/security/user/user.model';

@Resolver(of => Consulta)
export class ConsultasResolver {

    constructor(
        private readonly service: ConsultasService
    ) { }

    @Query(returns => [ Consulta ])
    @Roles('user', 'cliente', 'gerente')
    async consultas () {
        return await this.service.findAll();
    }

    @Query(returns => Consulta)
    @Roles('user', 'cliente', 'gerente')
    async consulta(@Args('id') id: string) {
        return await this.service.findById(id);
    }

    @Mutation(returns => Consulta)
    @Roles('user', 'gerente')
    async createConsulta(@Args('obj') obj: ConsultaCreateInput ) {
        return await this.service.create(obj);
    }

    /**
     * Resolver chamado pelo cliente
     * @param obj 
     */
    @Mutation(returns => Consulta)
    @Roles('user', 'cliente')
    async createAgendamento(
        @Args('obj') obj: AgendamentoCreateInput,
        @Context() ctx 
    ) {

        return await this.service.create({
            ...obj,
            paciente: new UserInputRef(ctx.req.user._id)
        });
    }

    @Mutation(returns => Consulta, { nullable : true })
    async deleteConsulta(@Args('id') id: string) {
        return await this.service.delete(id);
    }

    @Mutation(returns => Consulta, { nullable: true })
    async updateConsulta(
        @Args('id') id : string, 
        @Args('obj') obj  : ConsultaUpdateInput
    ) {
        return this.service.update(id, obj);
    }


    @Mutation(returns => Consulta, { nullable: true })
    async reportagemFinalizacao(
        @Args('id') id : string, 
        @Args('observacoesMedico') observacoesMedico  : string
    ) {
        const params : any = {} ;
        params.realizada = true;
        params.observacoesMedico = observacoesMedico;

        return this.service.update(id, params);
    }
}

