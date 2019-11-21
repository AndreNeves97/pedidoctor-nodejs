
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async authenticate(req, options?: any) {
        const { email, pass } = req.body;
    

        try {
            const user = await this.authService.validateEmailAndPass(email, pass);

            req.user = user;
            this['success'](user);

            return user
        } catch(e) {
            this['fail'](401);
        }

        return null;
    }



}

