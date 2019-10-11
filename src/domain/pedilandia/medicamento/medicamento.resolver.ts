import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MedicamentoService } from './medicamento.service';
import { Medicamento, MedicamentoUpdate, MedicamentoInput } from './medicamento.model';
import { Roles } from '../../../common/security/user/roles.guard';

@Resolver(of => Medicamento)
export class MedicamentoResolver {

    constructor(
        private readonly service: MedicamentoService
    ) { }

    @Query(returns => [ Medicamento ])
    @Roles('user', 'cliente', 'gerente')
    async medicamentos () {
        return await this.service.findAll();
    }

    @Query(returns => Medicamento)
    @Roles('user', 'cliente', 'gerente')
    async medicamento ( @Args('id') id: string ) {
        return await this.service.findById(id)
    }

    @Mutation(returns => Medicamento)
    @Roles('user', 'cliente', 'gerente')
    async createMedicamento ( @Args('obj') obj: MedicamentoInput ) {
        return await this.service.create(obj);
    }

    @Mutation(returns => Medicamento, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async deleteMedicamento ( @Args('id') id: string ) {
        return await this.service.delete(id);
    }

    @Mutation(returns => Medicamento, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async updateMedicamento ( @Args('id') id: string, @Args('obj') obj: MedicamentoUpdate ) {
        return await this.service.update( id, obj );
    }

}
