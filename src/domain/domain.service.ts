import { Injectable } from '@nestjs/common';

@Injectable()
export class DomainService {
    getApiRoutes() {
        return [
            {
                "desc": "GraphQl Feast",
                "route": "/graphql/feast"
              },
              {
                "desc": "GraphQl Supper",
                "route": "/graphql/supper"
              },
              {
                "desc": "GraphQl Pedilândia",
                "route": "/graphql/pedilandia"
              },
              {
                "desc": "GraphQl Genérico",
                "route": "/graphql/generico"
              }
        ]
    }
}
