import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Sintoma, SintomaInput, SintomaUpdate } from './sintoma.model';
import { SintomaService } from './sintoma.service';

@Resolver(of => Sintoma)
export class SintomaResolver {

    constructor(
        private readonly service: SintomaService
    ) { }

    @Query(returns => [ Sintoma ])
    async sintomas () {
        return await this.service.findAll();
    }

    @Query(returns => Sintoma)
    async sintoma ( @Args('id') id: string ) {
        return await this.service.findAll();
    }

    @Mutation(returns => Sintoma)
    async createSintoma ( @Args('obj') obj: SintomaInput ) {
        return await this.service.create(obj);
    }

    @Mutation(returns => Sintoma, { nullable : true })
    async deleteSintoma ( @Args('id') id: string ) {
        return await this.service.delete(id);
    }

    @Mutation(returns => Sintoma, { nullable : true })
    async updateSintoma ( @Args('id') id: string, @Args('obj') obj: SintomaUpdate ) {
        return this.service.update(id, obj);
    }

}
