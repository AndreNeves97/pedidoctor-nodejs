import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Doenca, DoencaInput, DoencaUpdate } from './doenca.model';
import { ModelType } from 'typegoose';

@Injectable()
export class DoencaService {

    constructor (
        @InjectModel(Doenca) private model: ModelType<Doenca>
    ) { }
    
    async findById ( id: string ): Promise<Doenca> {
        return await this.model
            .findById(id)
            .populate('sintomas')
            .lean();
    }

    async findAll ( ): Promise<Doenca[]> {
        return await this.model 
            .find()
            .populate('sintomas')
            .sort({ nome : 'asc' })
            .lean();
    }

    async create ( obj: DoencaInput ): Promise<Doenca> {
        const created = await this.model.create({
            ...obj
        });

        return this.findById(created._id);
    }

    async delete ( id: string ) {
        return this.model
            .findOneAndRemove({ _id : id })
            .populate('sintomas')
            .lean();
    }

    async update ( id: string, obj: DoencaUpdate ) {
        return this.model
            .findOneAndUpdate({ _id : id }, obj)
            .populate('sintomas')
            .lean();
    }

}
