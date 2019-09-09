import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    mongoDbInfo() : {uri: string, label: string} {
        return {
            uri: "mongodb://dalpham-admin:as2rk_13rf@ds131237.mlab.com:31237/dalpham-team-development",
            label: "mlab-dalpham-team-development"
        };
    }

    
}
