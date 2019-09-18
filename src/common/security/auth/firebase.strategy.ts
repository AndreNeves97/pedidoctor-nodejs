
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-strategy';

@Injectable()
export class FirebaseStrategy extends PassportStrategy(Strategy, 'firebase') {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async authenticate(req, options?: any) {
        const { idToken } = req.body;
        
        try {
            const user = await this.authService.validateFirebaseUser(idToken);

            req.user = user;
            this['success'](user);

            return user
        } catch(e) {
            this['fail'](401);
        }

        return null;
    }


}