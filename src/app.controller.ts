
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './common/security/auth/auth.service';
import { ConfigService } from './common/config/config.service';



@Controller()
export class AppController {
    constructor(
        private readonly service: AppService,
        private readonly authService: AuthService,
        private readonly configService: ConfigService
    ) {

    }

    @Get()
    index() {
        return this.service.index();
    }


    @UseGuards(AuthGuard('firebase'))
    @Post('login')
    async loginFirebase(@Request() req) {
        console.log('logged in');
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getProfile(@Request() req) {
        return req.user;
    }
}
