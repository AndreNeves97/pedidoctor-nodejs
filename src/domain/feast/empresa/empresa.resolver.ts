import { Resolver, Query, Args, Mutation, Subscription } from '@nestjs/graphql';
import { Empresa, EmpresaCreateInput, EmpresaUpdateInput } from './empresa.model';
import { EmpresaService } from './empresa.service';
import { PubSub } from 'graphql-subscriptions';


@Resolver(of => Empresa)
export class EmpresaResolver {

    pubSub = new PubSub();

    constructor(
        private readonly service: EmpresaService
    ) { }
    
    @Query(returns => [Empresa])
    async empresas() {
        const objs = await this.service.findAll();
        return objs;
    }


    @Mutation(returns => Empresa)
    async createEmpresa( @Args('obj') obj: EmpresaCreateInput ) {
        const created = await this.service.create(obj);

        this.pubSub.publish('empresaCreated', {empresaCreated: created});

        return created;
    }

    @Mutation(returns => Empresa, { nullable: true })
    async deleteEmpresa( @Args('id') id  : string) {
        return this.service.delete(id);
    }

    @Mutation(returns => Empresa, { nullable: true })
    async updateEmpresa(
        @Args('id') id : string, 
        @Args('obj') obj  : EmpresaUpdateInput
    ) {
        return this.service.update(id, obj);
    }

    @Subscription(returns => Empresa)
    empresaCreated() {
        return this.pubSub.asyncIterator('empresaCreated');
    }

}
