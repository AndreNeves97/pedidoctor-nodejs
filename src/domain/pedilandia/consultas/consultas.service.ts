import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Consulta, ConsultaCreateInput, ConsultaUpdateInput } from './consulta.model';
import { ModelType } from 'typegoose';

@Injectable()
export class ConsultasService {

    constructor(@InjectModel(Consulta) private model: ModelType<Consulta>) { }

    async findById(id: string): Promise<Consulta> {
        return await this.model.findById(id).populate('paciente');
    }

    async findAll(): Promise<Consulta> {
        const res = await this.model
            .find()
            .sort({ dataConsulta: 'desc' })
            .populate('paciente')
            .lean();


        return res;
    }

    async create(obj: ConsultaCreateInput): Promise<Consulta> {
        const created = await this.model.create({
            ...obj,
            realizada: false
        });
        
        return this.findById(created._id);
    }

    async delete(id: string) {
        return await this.model
            .findOneAndRemove({_id: id})
            .populate('paciente');
    }


    async update(id: string, obj: ConsultaUpdateInput) {    
        return await this.model
            .findOneAndUpdate({_id: id}, obj)
            .populate('paciente')
            .lean();
    }
}
