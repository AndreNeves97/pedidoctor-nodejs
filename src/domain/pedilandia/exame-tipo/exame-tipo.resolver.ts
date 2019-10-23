import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExameTipoService } from './exame-tipo.service';
import { ExameTipo, ExameTipoInput, ExameTipoUpdate } from './exame-tipo.model';
import { Roles } from '../../../common/security/user/roles.guard';

@Resolver('ExameTipo')
export class ExameTipoResolver {

    constructor (
        private readonly service: ExameTipoService
    ) { }

    @Query(returns => [ ExameTipo ])
    @Roles('user', 'cliente', 'gerente')
    async exameTipos () {
        return await this.service.findAll();
    }

    @Query(returns => ExameTipo)
    @Roles('user', 'cliente', 'gerente')
    async exameTipo ( @Args('id') id: string ) {
        return await this.service.findById(id);
    }

    @Mutation(returns => ExameTipo)
    @Roles('user', 'cliente', 'gerente')
    async createExameTipo ( @Args('obj') obj: ExameTipoInput ) {
        return await this.service.create(obj);
    }

    @Mutation(returns => ExameTipo, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async deleteExameTipo ( @Args('id') id: string ) {
        return await this.service.delete(id);
    }

    @Mutation(returns => ExameTipo, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async updateExameTipo ( @Args('id') id: string, @Args('obj') obj: ExameTipoUpdate ) {
        return await this.service.update(id, obj);
    }

}
