import { Injectable } from '@nestjs/common';
import { User, UserCreateFromFirebaseInput } from './user.model';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly model: ModelType<User>) { }


    async findOrCreateFromFirebase(userFb : any) : Promise<User> {
        let user = await this.findByFirebaseUid(userFb.uid);

        if(user == null) {
            user = await this.create({
                firebaseUid: userFb.uid,
                nome: userFb.name,
                email: userFb.email,
                fotoUrl: userFb.picture
            });

        }
        
        return user;
    }


    async findByFirebaseUid(uid: string): Promise<User> {
        const filter = {firebaseUid: uid};

        return await this.model.findOne(filter);
    }

    async findById(id: string): Promise<User> {
        return await this.model.findById(id);
    }

    async findAll(): Promise<User> {
        return this.model
            .find()
            .sort({ nome: 'desc' })
            .lean();
    }

    async create(obj: UserCreateFromFirebaseInput): Promise<User> {
        const created = await this.model.create(obj);
        return this.findById(created._id);
    }

    async delete(id: string) {
        return await this.model.findByIdAndRemove(id);
    }
    



}
