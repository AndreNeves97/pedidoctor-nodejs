
import { Controller, Request, Post, UseGuards, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './common/security/auth/auth.service';
import { ConfigService } from './common/config/config.service';
import { UserService } from './common/security/user/user.service';
import { User } from './common/security/user/user.model';



@Controller()
export class AppController {
    constructor(
        private readonly service: AppService,
        private readonly authService: AuthService,
        private readonly userService: UserService,
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
        const user : User = await this.userService.findOrCreateFromFirebase(req.user);
        const {_id, nome, email, fotoUrl} = user;

        const jwt = await this.authService.login(user);

        return {
            jwt,
            user : {_id,  nome, email, fotoUrl}    
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
