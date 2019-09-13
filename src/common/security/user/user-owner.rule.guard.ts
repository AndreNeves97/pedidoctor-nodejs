import { Injectable, CanActivate, ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';


export const UserOwnerRule = (rule) => SetMetadata('userOwnerRule', rule);

/**
 * Guard responsável por avaliar se usuário tem permissão de acesso à funções onde
 * o acesso é liberado apenas a usuários que são donos do recurso. 
 * 
 * O uso do guard é feito por meio do seguinte decorator:
 *  
 *  @UserOwnerRule( (user, args) => user.id === args.id || true)
 * 
 * Onde a função passada deve retornar true, em caso de acesso autorizado, ou false,
 * em caso de acesso não autorizado
 */
@Injectable()
export class UserOwnerRuleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const rule = this.reflector.get<Function>('userOwnerRule', context.getHandler());

        if (!rule) {
            return true;
        }


        const user = {
            id: "5d7b2496c1a48e44d95eae45"
        };


        const args = context.getArgs()[1];
        console.log(args);
        

        return rule(user, args);
    }
}