import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './user/user.model';

@Module({
    imports: [
        TypegooseModule.forFeature([{
            typegooseClass: User,
            schemaOptions: {
                collection: 'Pedilandia_User'
            }
        }])
    ],
    controllers: [UserController],
    providers: [UserService]
})
export class PedilandiaModule { }
