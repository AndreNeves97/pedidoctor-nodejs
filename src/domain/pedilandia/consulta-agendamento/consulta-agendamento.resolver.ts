
import { Resolver, Query, Args, Mutation, Subscription, Context } from '@nestjs/graphql';
import { UseGuards, SetMetadata } from '@nestjs/common';
import { Roles, RolesGuard } from '../../../common/security/user/roles.guard';
import { UserHaveAccessRule } from '../../../common/security/user/user-have-access.rule.guard';
import { UserInputRef } from '../../../common/security/user/user.model';

import { ConsultaAgendamento, ConsultaAgendamentoInput, SolicitacaoAgendamentoInput, ConsultaAgendamentoUpdate } from './consulta-agendamento.model';
import { ConsultaAgendamentoService } from './consulta-agendamento.service';
import { AgendamentoRealizacaoInput } from './agendamento-realizacao.model';
import { InputRef } from '../../../common/general/shared/input-ref.model';


@Resolver(of => ConsultaAgendamento)
export class ConsultaAgendamentoResolver {
    constructor(
        private readonly service : ConsultaAgendamentoService
    ) { }

    @Query(returns => [ ConsultaAgendamento ])
    @Roles('user', 'cliente', 'gerente')
    async agendamentos () {
        return await this.service.findAll();
    }

    @Query(returns => ConsultaAgendamento)
    @Roles('user', 'cliente', 'gerente')
    async agendamento (@Args('id') id: string) {
        return await this.service.findById(id);
    }

    @Mutation(returns => ConsultaAgendamento)
    @Roles('user', 'gerente')
    async createAgendamento(@Args('obj') obj: ConsultaAgendamentoInput ) {
        return await this.service.create(obj);
    }

    /**
     * Resolver chamado pelo cliente
     * @param obj 
     */
    @Mutation(returns => ConsultaAgendamento)
    @Roles('user', 'cliente')
    async createSolicitacaoAgendamento (
        @Args('obj') obj: SolicitacaoAgendamentoInput,
        @Context() ctx 
    ) {

        console.log(obj, ctx.req.user._id)

        return await this.service.create({
            ...obj,
            paciente: new InputRef(ctx.req.user._id)
        });
    }

    @Mutation(returns => ConsultaAgendamento, { nullable : true })
    async deleteAgendamento (@Args('id') id: string) {
        return await this.service.delete(id);
    }

    @Mutation(returns => ConsultaAgendamento, { nullable: true })
    async updateAgendamento (
        @Args('id') id : string, 
        @Args('obj') obj  : ConsultaAgendamentoUpdate
    ) {
        return this.service.update(id, obj);
    }


    @Mutation(returns => ConsultaAgendamento, { nullable: true })
    async reportagemFinalizacaoAgendamento (
        @Args('id') id : string, 
        @Args('informacoesRealizacao') informacoesRealizacao  : AgendamentoRealizacaoInput
    ) {

        return this.service.update(id, {
            realizacao: informacoesRealizacao
        });
    }
}
