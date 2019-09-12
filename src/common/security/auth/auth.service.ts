import * as jwt from 'jsonwebtoken';

import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { FirebaseService } from '../../firebase/firebase.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UserService,
        private readonly firebaseService: FirebaseService
    ) {

    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async validateFirebaseUser(firebaseToken: string): Promise<any> {
        const uid = await this.firebaseService.validate(firebaseToken);

        return {
            username: 'username',
            uid: uid
        };        
    }



    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        
        //para app em producao, "segredo" deve ser uma string aleatoria de 512bits salva numa variavel de ambiente
        
        return {
            access_token: jwt.sign(payload, 'secret', { expiresIn: '60s'}),
        };
    }
}
