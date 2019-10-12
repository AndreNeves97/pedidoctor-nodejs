import { User, UserCreateFromFirebaseInput, UserInput, UserUpdate } from '../../../common/security/user/user.model';
import { ModelType } from 'typegoose';

export abstract class UserService {
    constructor(private userModel : ModelType<User>) { }

    async findOrCreateFromFirebase(userFb : any) : Promise<User> {
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
            roles: ['user'] 
        });
        
        return user;
    }


    async findByFirebaseUid(uid: string): Promise<User> {
        const filter = {firebaseUid: uid};

        return await this.userModel.findOne(filter).lean();
    }

    async findByEmail(email: string ) : Promise<User> {
        const filter = {email};

        return await this.userModel.findOne(filter).lean();
    }

    async findById(id: string): Promise<User> {
        return await this.userModel.findById(id);
    }

    async findAll(): Promise<User> {
        return this.userModel
            .find()
            .sort({ nome: 'desc' })
            .lean();
    }

    async create(obj: UserCreateFromFirebaseInput | UserInput): Promise<User> {
        const created = await this.userModel.create(obj);
        return this.findById(created._id);
    }

    async delete(id: string) {
        return await this.userModel.findByIdAndRemove(id);
    }
    
    async update(id: string, obj: UserUpdate) {
        return await this.userModel
            .findByIdAndUpdate(id, obj)
            .lean();
    }


}
