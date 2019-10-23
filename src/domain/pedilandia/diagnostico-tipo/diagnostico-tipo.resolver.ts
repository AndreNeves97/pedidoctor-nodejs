import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { DiagnosticoTipoService } from './diagnostico-tipo.service';
import { Query } from '@nestjs/graphql';
import { DiagnosticoTipo, DiagnosticoTipoInput, DiagnosticoTipoUpdate } from './diagnostico-tipo.model';
import { Roles, RolesGuard } from '../../../common/security/user/roles.guard';

@Resolver(of => DiagnosticoTipo)
export class DiagnosticoTipoResolver {

    constructor(
        private readonly service: DiagnosticoTipoService
    ) { }

    @Query(returns => [ DiagnosticoTipo ])
    @Roles('user', 'cliente', 'gerente')   
    async diagnosticoTipos ( ) {
        return await this.service.findAll();
    }

    @Query(returns => DiagnosticoTipo)
    @Roles('user', 'cliente', 'gerente')   
    async diagnosticoTipo ( @Args('id') id: string )  {
        return await this.service.findById(id);
    }

    @Mutation(returns => DiagnosticoTipo)
    @Roles('user', 'cliente', 'gerente')   
    async createDiagnosticoTipo ( @Args('obj') obj: DiagnosticoTipoInput ) {
        return await this.service.create(obj);
    }

    @Mutation(returns => DiagnosticoTipo, { nullable : true })
    @Roles('user', 'cliente', 'gerente')   
    async deleteDiagnosticoTipo (@Args('id') id: string) {
        return await this.service.delete(id);
    }

    @Mutation(returns => DiagnosticoTipo, { nullable : true })
    @Roles('user', 'cliente', 'gerente')   
    async updateDiagnosticoTipo (@Args('id') id: string, @Args('obj') obj: DiagnosticoTipoUpdate) {
        return await this.service.update(id, obj);
    }

}
