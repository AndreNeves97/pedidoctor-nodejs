import { Injectable } from '@nestjs/common';
import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt';



const generatedDir = 'generated';
export const tmpDir = 
    process.env.NODE_ENV == 'development'? 
        'tmp' : 
        '/tmp/dalpham';


export const database = require(`../../../${generatedDir}/database.json`);
export const firebaseKey = require(`../../../${generatedDir}/firebase-key.json`);
export const jwt = require(`../../../${generatedDir}/jwt.json`);


/**
 * Classe que fornece parâmetros de configuração
 * 
 * Os dados reais não devem ser expostos diretamente na classe, mas obtidos de arquivos
 * gerados automaticamente no processo de `deploy`
 */
@Injectable()
export class ConfigService {// implements JwtOptionsFactory {
    // mongoDbInfo(): { uri: string, label: string } {
    //     return {
    //         uri: "mongodb://dalpham-admin:as2rk_13rf@ds131237.mlab.com:31237/dalpham-team-development",
    //         label: "mlab-dalpham-team-development"
    //     };
    // }
    
    // createJwtOptions(): JwtModuleOptions {
    //     return {
    //         secret: 'affsgdssdaff23__3##31rfa',
    //         signOptions: { expiresIn: '1h' },
    //     };
    // }

    // jwtSecretKey(): string {
    //     return '';
    // }


}
