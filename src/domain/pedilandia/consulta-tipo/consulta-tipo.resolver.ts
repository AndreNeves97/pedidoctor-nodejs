import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ConsultaTipoService } from './consulta-tipo.service';
import { ConsultaTipo, ConsultaTipoInput, ConsultaTipoUpdate } from './consulta-tipo.model';
import { Roles } from '../../../common/security/user/roles.guard';

@Resolver('ConsultaTipo')
export class ConsultaTipoResolver {

    constructor (
        private readonly service: ConsultaTipoService
    ) { }

    @Query(returns => [ ConsultaTipo ])
    @Roles('user', 'cliente', 'gerente')
    async consultaTipos ( ) {
        return await this.service.findAll();
    }

    @Query(returns => ConsultaTipo)
    @Roles('user', 'cliente', 'gerente')
    async consultaTipo ( @Args('id') id: string ) {
        return await this.service.findById(id)
    }
    
    @Mutation(returns => ConsultaTipo)
    @Roles('user', 'cliente', 'gerente')
    async createConsultaTipo ( @Args('obj') obj: ConsultaTipoInput) {
        return await this.service.create(obj);
    }

    @Mutation(returns => ConsultaTipo, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async deleteConsultaTipo ( @Args('id') id: string ) {
        return await this.service.delete(id);
    }

    @Mutation(returns => ConsultaTipo, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async updateConsultaTipo (@Args('id') id: string, @Args('obj') obj: ConsultaTipoUpdate) {
        return await this.service.update(id, obj);
    }

}
