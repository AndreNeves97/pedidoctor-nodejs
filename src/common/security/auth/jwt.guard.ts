import { AuthGuard } from "@nestjs/passport";
import { Injectable, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    getRequest(context: ExecutionContext) {

        let req = context.switchToHttp().getRequest();

        if(req == undefined) {
            const gqlContext = GqlExecutionContext.create(context);
            req = gqlContext.getContext().req;
        }

        
        
        return req;
    }
}