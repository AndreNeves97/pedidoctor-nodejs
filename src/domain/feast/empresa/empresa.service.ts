import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Empresa } from './empresa.model';
import { ModelType } from 'typegoose';

@Injectable()
export class EmpresaService {
    constructor(@InjectModel(Empresa) private readonly model : ModelType<Empresa>) { }

    async create(obj: Empresa) : Promise<Empresa> {
        return await this.model.create(obj);
    }

    async findById(id: number) : Promise<Empresa> {
        return await this.model.findById(id);
    }

    async findAll() : Promise<Empresa[]> {
        return await this.model.find().exec();
    }

    async find() {
    }

    async delete(id: number) {

    }

    async update(obj: Empresa) {

    }
}
