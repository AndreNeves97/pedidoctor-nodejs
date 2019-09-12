import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';



@Injectable()
export class FirebaseService {

    //para app de producao limitar o acesso que esse backend pode ter,para apenas funcoes necessarias,vide https://firebase.google.com/docs/database/admin/start/?hl=pt-br
    public static inicializa() {
        let serviceAccount = __dirname+'/chavesFirebase.json';

        admin.initializeApp({
            credential: admin.credential.applicationDefault(),
            databaseURL: "https://dalpham-dev.firebaseio.com"
        });
    }   



    async validate(firebaseToken: string) : Promise<string> {
        return "uid teste";

        let tokenDecodificado = await admin.auth().verifyIdToken(firebaseToken);
        return tokenDecodificado.uid;
    }
    
}
