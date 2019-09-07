import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('pedilandia/user')
export class UserController {

    constructor(private readonly service: UserService) { }

    @Get()
    async getUsers(): Promise<User[] | null> {
        return await this.service.findAll();
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return await this.service.create(user);
    }
}
