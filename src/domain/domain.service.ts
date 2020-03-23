import { Injectable } from '@nestjs/common';

@Injectable()
export class DomainService {
    getApiRoutes() {
        return [
            {
              "desc": "GraphQl",
              "route": "/graphql"
            }
        ]
    }
}
