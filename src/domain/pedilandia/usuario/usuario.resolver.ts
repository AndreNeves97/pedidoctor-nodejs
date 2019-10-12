import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Usuario, UsuarioInput, UsuarioUpdate } from './usuario.model';
import { UsuarioService } from './usuario.service';
import { Roles } from '../../../common/security/user/roles.guard';

@Resolver(of => Usuario)
export class UsuarioResolver {

    constructor (
        private readonly service: UsuarioService
    ) { }

    @Query(returns => [ Usuario ])
    @Roles('user', 'cliente', 'gerente')
    async usuarios () {
        return await this.service.findAll();
    }

    @Query(returns => Usuario)
    @Roles('user', 'cliente', 'gerente')
    async usuario ( @Args('id') id: string ) {
        return await this.service.findById(id);
    }

    @Mutation(returns => Usuario)
    @Roles('user', 'cliente', 'gerente')
    async createUsuario ( @Args('obj') obj: UsuarioInput ) {    
        return await this.service.create({
            ...obj,
            roles: ['user', 'cliente']
        });
    }

    @Mutation(returns => Usuario, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async deleteUsuario ( @Args('id') id: string ) {
        return await this.service.delete(id);
    }

    @Mutation(returns => Usuario, { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async updateUsuario ( @Args('id') id:string, @Args('obj') obj: UsuarioUpdate ) {
        return await this.service.update(id, obj);
    }

}
