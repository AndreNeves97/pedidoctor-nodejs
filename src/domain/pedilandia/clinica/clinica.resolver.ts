import { Clinica, ClinicaCreateInput, ClinicaUpdateInput } from './clinica.model';
import { ClinicaService } from './clinica.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Roles, RolesGuard } from '../../../common/security/user/roles.guard';

@Resolver(of => Clinica)
export class ClinicaResolver {

    constructor (
        private readonly service: ClinicaService
    ) { }

    @Query(returns => [ Clinica ])
    @Roles('user', 'cliente', 'gerente')
    async clinicas () {
        return await this.service.findAll();
    }

    @Query(returns => Clinica)
    @Roles('user', 'cliente', 'gerente')    
    async clinica ( @Args('id') id: string ) {
        return await this.service.findById(id);
    }

    @Mutation(returns => Clinica)
    @Roles('user', 'gerente')
    async createClinica ( @Args('obj') obj: ClinicaCreateInput ) {
        return await this.service.create(obj);
    }

    @Mutation(returns => Clinica, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async deleteClinica ( @Args('id') id: string ) {
        return await this.service.delete(id);
    }

    @Mutation(returns => Clinica, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async updateClinica ( @Args('id') id:string, @Args('obj') obj: ClinicaUpdateInput ) {
        return await this.service.update(id, obj);
    }

}
