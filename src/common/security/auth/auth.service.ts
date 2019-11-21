import * as jwt from 'jsonwebtoken';

import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../firebase/firebase.service';

import { jwt as jwtInfo } from '../../config/config.service';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { UsuarioService } from '../../../domain/pedilandia/usuario/usuario.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly firebaseService: FirebaseService,
        private readonly userService : UsuarioService
    ) { }


    async validateFirebaseUser(idToken: string): Promise<any> {
        return await this.firebaseService.validate(idToken); 
    }

    async validateEmailAndPass(email : string, pass: string) {
        const user = await this.userService.findByEmail(email);

        if(user.email == email && user.senha === pass) {
            return user;
        }
    }



    async login(user: User) {
        const payload = { 
            id: user._id
        };

        return jwt.sign(payload, jwtInfo.secret, jwtInfo.signOptions);
    }
}
