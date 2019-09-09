import { Injectable } from '@nestjs/common';

@Injectable()
export class SecurityService {

    //para app de producao limitar o acesso que esse backend pode ter,para apenas funcoes necessarias,vide https://firebase.google.com/docs/database/admin/start/?hl=pt-br
    public static inicializa() {
        let serviceAccount = __dirname+'/chavesFirebase.json';
        // admin.initializeApp({
        //     //para app de producao,utilizar variavel de sistema,vide https://firebase.google.com/docs/admin/setup
        //     credential: admin.credential.cert(serviceAccount),
        //     databaseURL: 'https://dalpham-e1383.firebaseio.com/'
        // });
    }
    
    public static async login() {
        
    }

    //public static autoriza() : boolean {};

    //vide https://firebase.google.com/docs/auth/admin/verify-id-tokens?hl=pt-br
    //pelo app usuario loga pelo firebase e manda o token para a gente
    //com esse token firebase sabemos qm eh o usuario, e conseguimos gerar nosso propio token pra ele
    public static async loga(response,tokenFirebase) : Promise<string> { 
    //    try { 
    //        let tokenDecodificado = await admin.auth().verifyIdToken(tokenFirebase);
    //        let uid = tokenDecodificado.uid; //identificao unica do usuario fornecida pelo google
    //        //para app em producao, "segredo" deve ser uma string aleatoria de 512bits salva numa variavel de ambiente
    //        let nossoToken = await jwt.sign(uid,"segredo",{expiresIn: 60*60 }); //cria um token para o usuario que expira em 3600 segundos(1h).
    //        return nossoToken;
    //    } catch(erro) {
    //        //melhorar isso aqui depois,lancando execoes
    //        response.send(500); //envia erro para usuario
    //    }

        return 'aa';
    };
    
    //public static cadastra() : boolean {};

}
