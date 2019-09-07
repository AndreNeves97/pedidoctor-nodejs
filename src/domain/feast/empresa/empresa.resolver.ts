import { Resolver, Query } from '@nestjs/graphql';
import { Empresa } from './empresa.model';
import { EmpresaService } from './empresa.service';

@Resolver(of => Empresa)
export class EmpresaResolver {
    constructor(
        private readonly service: EmpresaService
    ) { }



    @Query(returns => String)
    async teste() {

        console.log('aaaaaaaaaaffffff');
        return 'teste de graphql com empresa';
    }

    @Query(returns => [Empresa])
    async findAll() {
        const objs = await this.service.findAll();
        
        return objs;
    }
}
