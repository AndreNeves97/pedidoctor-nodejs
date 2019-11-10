import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Empresa, EmpresaCreateInput, EmpresaUpdateInput } from './empresa.model';
import { ModelType } from 'typegoose';

@Injectable()
export class EmpresaService {

    constructor(
        @InjectModel(Empresa) private readonly model : ModelType<Empresa>
    ) { }


    async findById(id: number) : Promise<Empresa> {
        return await this.model.findById(id);
    }

    async findAll() : Promise<Empresa[]> {
        return this.model
            .find()
            .sort({ nome: 'asc' })
            .lean();
    }

    async find() {
    }

    async create(obj: EmpresaCreateInput) : Promise<Empresa> {
        return await this.model.create(obj);
    }

    async delete(id: string) {
        return await this.model
            .findByIdAndRemove(id);
    }

    async update(id: string, obj: EmpresaUpdateInput) {
        return await this.model
            .findByIdAndUpdate(id, obj)
            .lean();
    }
}
