import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { ModelType } from 'typegoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly model: ModelType<User>) { }


    async create(user: User): Promise<User> {
        const created = new this.model(user);
        return await created.save();
    }

    async findAll(): Promise<User[] | null> {
        return await this.model.find().exec();
    }
}
