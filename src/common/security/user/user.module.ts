import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './user.model';

@Module({
    imports: [
        // TODO: Criar índice único para firebaseUid
        TypegooseModule.forFeature([{
            typegooseClass: User,
            schemaOptions: {
                collection: 'User'
            }
        }]),
    ],
    exports: [
        TypegooseModule,
        UserService
    ],
    providers: [
        UserService, 
        UserResolver
    ]
})
export class UserModule {}
