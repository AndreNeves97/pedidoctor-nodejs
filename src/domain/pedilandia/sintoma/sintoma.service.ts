import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Sintoma, SintomaInput, SintomaUpdate } from './sintoma.model';
import { ModelType } from 'typegoose';

@Injectable()
export class SintomaService {

    constructor ( 
        @InjectModel(Sintoma) private model: ModelType<Sintoma>
    ) { }

    async findById ( id: string ): Promise<Sintoma> {
        return this.model
            .findById(id)
            .lean();
    }

    async findAll (conditions = {}, projection = {}, offset = 0, limit = 0): Promise<Sintoma> {
        return this.model
            .find(conditions, projection)
            .sort({ nome : 'asc' })
            .lean();
    }

    async create ( obj: SintomaInput ): Promise<Sintoma> {
        const created = await this.model.create({
            ...obj
        });

        return this.findById(created._id);
    }

    async delete ( id: string ) {
        return this.model
            .findOneAndRemove({ _id : id })
            .lean();
    }

    async update ( id: string, obj: SintomaUpdate ) {
        return this.model   
            .findOneAndUpdate({ _id : id }, obj)
            .lean();
    }

}
