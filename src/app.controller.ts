
import { Controller, Request, Post, UseGuards, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './common/security/auth/auth.service';
import { ConfigService } from './common/config/config.service';
import { UsuarioService } from './domain/pedilandia/usuario/usuario.service';
import { Usuario } from './domain/pedilandia/usuario/usuario.model';



@Controller()
export class AppController {
    constructor(
        public readonly service: AppService,
        public readonly authService: AuthService,
        public readonly userService: UsuarioService,
        public readonly configService: ConfigService
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
        const {_id, nome, email, fotoUrl, roles, atribuicoes, isPaciente} = user;

        const jwt = await this.authService.login(user);


        return { 
            jwt,
            user : {_id,  nome, email, fotoUrl, roles, atribuicoes, isPaciente}    
        }
    }

    @UseGuards(AuthGuard('local'))
    @Post('login-email')
    @HttpCode(200)
    async loginEmail(@Request() req) {
        const user : Usuario = req.user;
        const {_id, nome, email, fotoUrl, roles, atribuicoes, isPaciente} = user;

        const jwt = await this.authService.login(user);


        return {
            jwt,
            user : {_id,  nome, email, fotoUrl, roles, atribuicoes, isPaciente}    
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
