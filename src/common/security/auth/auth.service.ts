import * as jwt from 'jsonwebtoken';

import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { FirebaseService } from '../../firebase/firebase.service';

import { jwt as jwtInfo } from '../../config/config.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UserService,
        private readonly firebaseService: FirebaseService
    ) { }


    async validateFirebaseUser(idToken: string): Promise<any> {
        const firebaseUser = await this.firebaseService.validate(idToken);

        return firebaseUser; 
    }



    async login(user: any) {

        const payload = { 
            uid: user.uid
        };

        return {
            accessToken: jwt.sign(payload, jwtInfo.secret, jwtInfo.signOptions),
        };
    }
}
