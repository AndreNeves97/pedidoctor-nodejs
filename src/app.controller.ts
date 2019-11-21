
import { Controller, Request, Post, UseGuards, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './common/security/auth/auth.service';
import { ConfigService } from './common/config/config.service';
import { UserService } from './common/security/user/user.service';
import { User } from './common/security/user/user.model';
import { UsuarioService } from './domain/pedilandia/usuario/usuario.service';
import { Usuario } from './domain/pedilandia/usuario/usuario.model';



@Controller()
export class AppController {
    constructor(
        private readonly service: AppService,
        private readonly authService: AuthService,
        private readonly userService: UsuarioService,
        private readonly configService: ConfigService
    ) { }

    @Get()
    index() {
        return this.service.index();
    }

    @UseGuards(AuthGuard('firebase'))
    @Post('login')
    @HttpCode(200)
    async loginFirebase(@Request() req) {
        const user : Usuario = await this.userService.findOrCreateFromFirebase(req.user);
        const {_id, nome, email, fotoUrl, roles, atribuicoes} = user;

        const jwt = await this.authService.login(user);

        console.log(jwt, user);

        return {
            jwt,
            user : {_id,  nome, email, fotoUrl, roles, atribuicoes}    
        }
    }

    @UseGuards(AuthGuard('local'))
    @Post('login-email')
    @HttpCode(200)
    async loginEmail(@Request() req) {
        const user : Usuario = req.user;
        const {_id, nome, email, fotoUrl, roles, atribuicoes} = user;

        const jwt = await this.authService.login(user);


        return {
            jwt,
            user : {_id,  nome, email, fotoUrl, roles, atribuicoes}    
        }
    }

    @Get('me')
    getProfile(@Request() req) {
        if(req.user == undefined)
            return {
                user: 'nao-conectado'
            };
        
        const {nome, email, fotoUrl} = req.user;
        
        return {
            user: {nome, email, fotoUrl},
        };
    }
}
