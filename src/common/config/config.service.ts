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
export class ConfigService { }
