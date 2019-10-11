import { Injectable } from '@nestjs/common';
import { Medicamento, MedicamentoInput, MedicamentoUpdate } from './medicamento.model';
import { ModelType } from 'typegoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class MedicamentoService {

    constructor (
        @InjectModel(Medicamento) private model: ModelType<Medicamento>
    ) { }

    async findById ( id: string ): Promise<Medicamento> {
        return await this.model
            .findById(id)
            .populate('indicadoPara')
            .lean();
    }

    async findAll (): Promise<Medicamento> {
        return await this.model
            .find()
            .populate('indicadoPara')
            .sort({ nome : 'asc' })
            .lean();
    }

    async create ( obj: MedicamentoInput ): Promise<Medicamento> {
        const created = await this.model.create({
            obj
        });

        return this.findById(created._id);
    }

    async delete ( id: string ) {
        return await this.model
            .findOneAndRemove({ _id: id })
            .populate('indicadoPara')
            .lean();
    }

    async update ( id: string, obj: MedicamentoUpdate ) {
        return await this.model
            .findOneAndUpdate({ _id : id }, obj, { lean: true })
            .populate('indicadoPara');
    }
}   
