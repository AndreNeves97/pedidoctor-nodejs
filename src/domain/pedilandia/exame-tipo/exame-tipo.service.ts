import { Injectable } from '@nestjs/common';
import { ModelType } from 'typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { ExameTipo, ExameTipoInput, ExameTipoUpdate } from './exame-tipo.model';
import { throwStatement } from '@babel/types';

@Injectable()
export class ExameTipoService {

    constructor (
        @InjectModel(ExameTipo) private model: ModelType<ExameTipo>
    ) { }

    async findById ( id: string ): Promise<ExameTipo> {
        return await this.model
            .findById(id)
            .lean();
    }

    async findAll ( ): Promise<ExameTipo> {
        return await this.model
            .find()
            .sort({ nome : 'asc' })
            .lean();
    }

    async create ( obj: ExameTipoInput ): Promise<ExameTipo> {
        const created = await this.model.create({
            ...obj
        });

        return this.findById(created._id);
    }

    async delete ( id: string ) {
        return await this.model
            .findOneAndRemove({ _id : id })
            .lean();
    }

    async update ( id: string, obj: ExameTipoUpdate ) {
        return await this.model
            .findOneAndUpdate({ _id : id }, obj)
            .lean();
    }
}
