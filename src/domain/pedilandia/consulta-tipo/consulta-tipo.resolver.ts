import { Resolver, Query, Args } from '@nestjs/graphql';
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
    async consultasTipo ( ) {
        return await this.service.findAll();
    }

    @Query(returns => ConsultaTipo)
    @Roles('user', 'cliente', 'gerente')
    async consultaTipo ( @Args('id') id: string ) {
        return await this.service.findById(id)
    }
    
    @Query(returns => ConsultaTipo)
    @Roles('user', 'cliente', 'gerente')
    async createConsultaTipo ( @Args('obj') obj: ConsultaTipoInput) {
        return await this.service.create(obj);
    }

    @Query(returns => ConsultaTipo, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async deleteConsultaTipo ( @Args('id') id: string ) {
        return await this.service.delete(id);
    }

    @Query(returns => ConsultaTipo, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async updateConsultaTipo (@Args('id') id: string, @Args('obj') obj: ConsultaTipoUpdate) {
        return this.service.update(id, obj);
    }

}
