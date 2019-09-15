import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Consulta, ConsultaCreateInput } from './consulta.model';
import { ModelType } from 'typegoose';

@Injectable()
export class ConsultasService {

    constructor(@InjectModel(Consulta) private model: ModelType<Consulta>) { }

    async findById(id: string): Promise<Consulta> {
        return await this.model.findById(id).populate('paciente');
    }

    async findAll(): Promise<Consulta> {
        return this.model
            .find()
            .sort({ dataConnsulta: 'desc' })
            .populate('paciente')
            .lean();
    }

    async create(obj: ConsultaCreateInput): Promise<Consulta> {
        const created = await this.model.create({
            ...obj,
            dataRegistro: new Date()
        });

        return this.findById(created._id);
    }

    async delete(id: string) {
        return await this.model.findByIdAndRemove(id);
    }
}
