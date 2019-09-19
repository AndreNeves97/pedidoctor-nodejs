import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';
import { Roles } from './roles.guard';

@Resolver('User')
export class UserResolver {

    constructor (
        private readonly service: UserService
    ) {}

    public static async login ( parent, { email, password }, context, ingo ) {

        // const usuario_buscado = await UsuarioModel.findOne({ email }).lean();

        // if ( !usuario_buscado ) throw new Error( 'Usuário não encontrado' );

        // const valid = await bcrypt.compare ( password, usuario_buscado.password );

        // if ( !valid ) throw new Error ( 'Login incorreto' );

        // const value = await jwt.sign(
        //     {
        //         id      : usuario_buscado.id,
        //         email   : usuario_buscado.email,
        //         roles   : usuario_buscado.roles
        //     },
        //     "segredão",
        //     { 
        //         expiresIn: '1y'
        //     });
        
        // const logged_usuario = {
        //     _id     : usuario_buscado._id,
        //     nome    : usuario_buscado.nome,
        //     email   : usuario_buscado.email,
        //     token   : value
        // }

        // return logged_usuario;
    }

    @Query(returns => [ User ])
    @Roles('admin-system', 'admin-clinica', )
    async users () {
        const users = await this.service.findAll();
        console.log(users);
        
        return users;
    }

}
