import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './user/user.model'
import { SecurityService } from './security.service';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';

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
    providers: [UserService, SecurityService, UserResolver]

})
export class SecurityModule {}
