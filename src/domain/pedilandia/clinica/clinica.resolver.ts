import { Clinica, ClinicaCreateInput, ClinicaUpdateInput } from './clinica.model';
import { ClinicaService } from './clinica.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Roles, RolesGuard } from '../../../common/security/user/roles.guard';
import { ObjectId } from 'bson';

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


   /**
    * 
    * @param idClinica 
    * @param idUsuario 
    * @param grupo :
    *   - O grupo ao qual adicionar o usuário. Deve ser:
    *     - secretarios
    *     - medicos
    *     - enfermeiros
    *     - clientes
    * 
    *   - A API não filtrará valores inválidos, mas a inserção gerará lixo no banco
    */ 
    @Mutation(returns => Clinica)
    async atribuirUsuarioClinica ( 
        @Args('idClinica') idClinica : string ,
        @Args('idUsuario') idUsuario : string  ,
        @Args('grupo') grupo : string 
    ) {
        const addToSet = {};
        addToSet[grupo] = new ObjectId(idUsuario);

        return await this.service.update(idClinica, {
            $addToSet: addToSet
        });
    }

    @Mutation(returns => Clinica)
    async removerUsuarioClinica(
        @Args('idClinica') idClinica : string ,
        @Args('idUsuario') idUsuario : string  ,
        @Args('grupo') grupo : string 
    ) {
        const pull = {};
        pull[grupo] = new ObjectId(idUsuario);

        return await this.service.update(idClinica, {
            $pull: pull
        });
    }

}
