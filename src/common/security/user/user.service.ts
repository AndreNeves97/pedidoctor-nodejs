import { User, UserCreateFromFirebaseInput, UserInput, UserUpdate } from '../../../common/security/user/user.model';
import { ModelType } from 'typegoose';

export abstract class UserService<T extends User> {
    constructor(private userModel : ModelType<T>) { }

    async findOrCreateFromFirebase(userFb : any) : Promise<T> {
        let user = await this.findByFirebaseUid(userFb.uid);
        
        if(user != null)
            return user;
        
            
        user = await this.findByEmail(userFb.email);
        
        if(user != null)
            return user;


        user = await this.create({
            firebaseUid: userFb.uid,
            nome: userFb.name,
            email: userFb.email,
            fotoUrl: userFb.picture,
            roles: ['user'],
            tipo: 0
        });
        
        return user;
    }


    async findByFirebaseUid(uid: string): Promise<T> {
        const filter = {firebaseUid: uid};

        return await this.userModel.findOne(filter).lean();
    }

    async findByEmail(email: string ) : Promise<T> {
        const filter = {email: email};

        return await this.userModel.findOne(filter).lean();
    }

    async findById(id: string): Promise<T> {
        return await this.userModel.findById(id);
    }

    async findAll(): Promise<T[]> {
        return this.userModel
            .find()
            .sort({ nome: 'desc' })
            .lean();
    }

    async create(obj: UserCreateFromFirebaseInput | UserInput): Promise<T> {
        const created = await this.userModel.create(obj);
        return this.findById(created._id);
    }
    
    async update(id: string, obj: UserUpdate) {
        return await this.userModel
            .findByIdAndUpdate(id, obj)
            .lean();
    }


}
