import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Usuario, UsuarioInput, UsuarioUpdate } from './usuario.model';
import { UsuarioService } from './usuario.service';
import { Roles } from '../../../common/security/user/roles.guard';
import { Int } from 'type-graphql';

@Resolver(of => Usuario)
export class UsuarioResolver {

    constructor (
        private readonly service: UsuarioService
    ) { }

    @Query(returns => [ Usuario ])
    @Roles('user', 'cliente', 'gerente')
    async usuarios (

        @Args({ 
            name: 'query', 
            nullable: true,
            type: () => String 
        }) query?: string,

        @Args({ 
            name: 'onlyAdmins', 
            nullable: true,
            type: () => Boolean 
        }) onlyAdmins?: boolean,

        @Args({ 
            name: 'offset', 
            nullable: true,
            type: () => Int
        }) offset : number = 0,

        @Args({ 
            name: 'limit', 
            nullable: true,
            type: () => Int,
        }) limit : number = 10,

    ) {

        const condition = {};
        const projection = {};
        const sort = {};


        if(query !== undefined && query !== "") {
            condition['nome'] = new RegExp(`^${query}`, 'i');
        }

        if(onlyAdmins) {
            condition['roles'] = 'admin';
        }
        
        return this.service
            .findAll(condition, projection, offset, limit);
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

    @Query(returns => [Usuario], { nullable : true })
    @Roles('user', 'cliente', 'gerente')
    async findByTipo ( @Args('tipo') tipo: number ) {
        return await this.service.findByTipo( tipo );
    }



    @Mutation(returns => Usuario)
    @Roles('admin')
    async adicionarAdmin( @Args('id') id : string ) {
        return await this.service.update(id, {
            $addToSet: {roles: 'admin'}
        })
    }

    @Mutation(returns => Usuario)
    @Roles('admin')
    async removerAdmin( @Args('id') id : string ) {
        return await this.service.update(id, {
            $pull: {roles: 'admin'}
        })
    }

}
