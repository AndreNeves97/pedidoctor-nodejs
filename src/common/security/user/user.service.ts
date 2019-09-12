import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';

@Injectable()
export class UserService {
    private readonly users;


    constructor(@InjectModel(User) private readonly model: ModelType<User>) { 



        this.users = [
            {
              userId: 1,
              username: 'john',
              password: 'changeme',
            },
            {
              userId: 2,
              username: 'chris',
              password: 'secret',
            },
            {
              userId: 3,
              username: 'maria',
              password: 'guess',
            },
          ];

    }



    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
    
    async create(user: User): Promise<User> {
        const created = new this.model(user);
        return await created.save();
    }

    async findAll(): Promise<User[] | null> {
        return await this.model.find().exec();
    }



}
