import { Resolver, Query } from '@nestjs/graphql';
import { Empresa } from './empresa.model';

@Resolver(of => Empresa)
export class EmpresaResolver {
    @Query(returns => String)
    async teste() {
        return 'teste de graphql com empresa';
    }
}
