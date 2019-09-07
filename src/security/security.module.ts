import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
    imports: [
        TypegooseModule.forFeature([{
            typegooseClass: User,
            schemaOptions: {
                collection: 'Pedilandia_User'
            }
        }])
    ],
    exports: [
        TypegooseModule
    ],
    providers: [UserService]

})
export class SecurityModule {}
