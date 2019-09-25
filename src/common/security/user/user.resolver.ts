import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User, ClienteCreateInput, UserUpdateInput } from './user.model';
import { Roles } from './roles.guard';
import { Consulta } from '../../../domain/pedilandia/consultas/consulta.model';

@Resolver('User')
export class UserResolver {

    constructor (
        private readonly service: UserService
    ) {}


    @Query(returns => [ User ])
    @Roles('user', 'admin-system', 'admin-clinica')
    async users () {
        const users = await this.service.findAll();        
        return users;
    }

    /**
     * Função acesssada pelo gerente da clínica
     * @param obj 
     */
    @Mutation(returns => User)
    @Roles('user', 'gerente')
    async createCliente(@Args('obj') obj: ClienteCreateInput ) {
        return await this.service.create({
            ...obj,
            roles: ['user', 'cliente']
        });
    }


    @Mutation(returns => User, { nullable : true })
    async deleteUser(@Args('id') id: string) {
        return await this.service.delete(id);
    }


    @Mutation(returns => User, { nullable: true })
    async updateUser(
        @Args('id') id : string, 
        @Args('obj') obj  : UserUpdateInput
    ) {
        return this.service.update(id, obj);
    }


}
