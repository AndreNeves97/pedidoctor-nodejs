import { Injectable, CanActivate, ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

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
         * Se o Decorator de Roles não foi usado
         */
        if (!roles) {
            return true;
        }

        const ctx = GqlExecutionContext.create(context).getContext();
        const user = ctx.req.user;

        const hasRole = 
            () => user.roles.some(
                (role) => roles.includes(role)
            );
        
        return user && user.roles && hasRole();
    }
}