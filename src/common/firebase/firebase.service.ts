import { Injectable, Scope } from '@nestjs/common';
import * as admin from 'firebase-admin';



@Injectable({scope: Scope.DEFAULT})
export class FirebaseService {

    static firebaseApp;

    /**
     * TODO: Para app de produção, limitar o acesso que esse backend pode ter.
     * Permitir apenas funcoes necessárias.
     * 
     * https://firebase.google.com/docs/database/admin/start/?hl=pt-br
     */
    public constructor() {
        if(FirebaseService.firebaseApp != undefined) {
            return;
        }

        FirebaseService.firebaseApp = admin.initializeApp({
            credential: admin.credential.applicationDefault()
        });
    }   



    async validate(idToken: string) : Promise<any> {
        let tokenDecodificado = await admin.auth().verifyIdToken(idToken);        
        return tokenDecodificado;
    }
    
}
