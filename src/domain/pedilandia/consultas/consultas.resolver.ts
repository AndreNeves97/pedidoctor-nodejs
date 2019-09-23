import { Resolver, Query, Args, Mutation, Subscription } from '@nestjs/graphql';
import { Consulta, ConsultaCreateInput } from './consulta.model';
import { ConsultasService } from './consultas.service';
import { UseGuards, SetMetadata } from '@nestjs/common';
import { Roles, RolesGuard } from '../../../common/security/user/roles.guard';
import { UserOwnerRule } from '../../../common/security/user/user-owner.rule.guard';

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
    @Roles('cliente', 'gerente')
    async consulta(@Args('id') id: string) {
        return await this.service.findById(id);
    }

    @Mutation(returns => Consulta)
    @Roles('cliente', 'gerente')
    async createConsulta(@Args('obj') obj: ConsultaCreateInput ) {
        return await this.service.create(obj);
    }

    @Mutation(returns => Consulta, { nullable : true })
    async deleteConsulta(@Args('id') id: string) {
        return await this.service.delete(id);
    }

}

