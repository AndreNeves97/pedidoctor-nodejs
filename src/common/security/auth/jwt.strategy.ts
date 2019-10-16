import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, ExecutionContext } from '@nestjs/common';
import { jwt as jwtInfo } from '../../config/config.service';
import { UserService } from '../user/user.service';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from '../user/user.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly userService: UserService<User>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: jwtInfo.secret,
        });
    }

    async validate(payload: any) {
        return await this.userService.findByFirebaseUid( payload.uid );
    }
}