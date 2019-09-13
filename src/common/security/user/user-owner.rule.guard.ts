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
        /**
         * Obtenção da função que define a regra de definição de propriedade
         */
        const rule = this.reflector.get<Function>('userOwnerRule', context.getHandler());

        /**
         * Decorator não foi usado
         */
        if (!rule) {
            return true;
        }


        /**
         * TODO: Obtenção do usuário ativo no request
         */
        const user = {
            id: "5d7b2496c1a48e44d95eae45"
        };


        /**
         * Obter argumentos passados para a função
         */
        const args = context.getArgs()[1];
        
        /**
         * Executar a regra passada por parâmetro
         */
        return rule(user, args);
    }
}