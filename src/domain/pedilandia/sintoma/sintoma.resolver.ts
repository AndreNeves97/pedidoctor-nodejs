import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Sintoma, SintomaInput, SintomaUpdate } from './sintoma.model';
import { SintomaService } from './sintoma.service';
import { Roles } from '../../../common/security/user/roles.guard';

@Resolver(of => Sintoma)
export class SintomaResolver {

    constructor(
        private readonly service: SintomaService
    ) { }

    @Query(returns => [ Sintoma ])
    @Roles('user', 'cliente', 'gerente')
    async sintomas () {
        return await this.service.findAll();
    }

    @Query(returns => Sintoma)
    @Roles('user', 'cliente', 'gerente')
    async sintoma ( @Args('id') id: string ) {
        return await this.service.findAll();
    }

    @Mutation(returns => Sintoma)
    @Roles('user', 'cliente', 'gerente')
    async createSintoma ( @Args('obj') obj: SintomaInput ) {
        return await this.service.create(obj);
    }

    @Mutation(returns => Sintoma, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async deleteSintoma ( @Args('id') id: string ) {
        return await this.service.delete(id);
    }

    @Mutation(returns => Sintoma, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async updateSintoma ( @Args('id') id: string, @Args('obj') obj: SintomaUpdate ) {
        return this.service.update(id, obj);
    }

}
