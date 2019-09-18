import * as jwt from 'jsonwebtoken';

import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { FirebaseService } from '../../firebase/firebase.service';

import { jwt as jwtInfo } from '../../config/config.service';
import { User } from '../user/user.model';

@Injectable()
export class AuthService {

    constructor(
        private readonly firebaseService: FirebaseService
    ) { }


    async validateFirebaseUser(idToken: string): Promise<any> {
        return await this.firebaseService.validate(idToken); 
    }



    async login(user: User) {
        const payload = { 
            uid: user.firebaseUid
        };

        return jwt.sign(payload, jwtInfo.secret, jwtInfo.signOptions);
    }
}
