import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DoencaService } from './doenca.service';
import { Doenca, DoencaInput, DoencaUpdate } from './doenca.model';
import { Roles } from '../../../common/security/user/roles.guard';

@Resolver(of => Doenca)
export class DoencaResolver {

    constructor ( 
        private readonly service: DoencaService
    ) { }

    @Query(returns => [ Doenca ])
    @Roles('user', 'cliente', 'gerente')
    async doencas () {
        return await this.service.findAll();
    }
    
    @Query(returns => Doenca)
    @Roles('user', 'cliente', 'gerente')
    async doenca ( @Args('id') id: string ) {
        return await this.service.findById(id);
    }

    @Mutation(returns => Doenca)
    @Roles('user', 'cliente', 'gerente')
    async createDoenca ( @Args('obj') obj: DoencaInput ) {
        return await this.service.create(obj);
    }

    @Mutation(returns => Doenca, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async deleteDoenca ( @Args('id') id: string ) {
        return await this.service.delete(id);
    }

    @Mutation(returns => Doenca, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async updateDoenca ( @Args('id') id: string, @Args('obj') obj: DoencaUpdate ) {
        return await this.service.update(id, obj);
    }

}
