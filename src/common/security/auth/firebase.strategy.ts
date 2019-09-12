import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class FirebaseStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }



    //vide https://firebase.google.com/docs/auth/admin/verify-id-tokens?hl=pt-br
    //pelo app usuario loga pelo firebase e manda o token para a gente
    //com esse token firebase sabemos qm eh o usuario, e conseguimos gerar nosso propio token pra ele
    async validate(firebaseToken): Promise<any> {

        console.log(`Tentativa de validação: ${firebaseToken}`);

        const user = await this.authService.validateFirebaseUser(firebaseToken);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }


}