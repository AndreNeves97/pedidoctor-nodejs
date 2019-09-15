import { Injectable, CanActivate, ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {

        /**
         * Busca da lista de Roles passada por parâmetro no decorator @Roles
         */
        const roles = this.reflector.get<string[]>('roles', context.getHandler());

        /**
         * Decorator não foi usado
         */
        if (!roles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        
        /**
         * TODO: Obtenção do usuário ativo no request
         */
        //const user = request.user;
        
        const user = {
            roles: [
                'admin',
                'cliente'
            ]
        };

        const hasRole = () => user.roles.some((role) => roles.includes(role));
        return user && user.roles && hasRole();
    }
}