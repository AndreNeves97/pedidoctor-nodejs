import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Consulta, ConsultaCreateInput } from './consulta.model';
import { ModelType } from 'typegoose';

@Injectable()
export class ConsultasService {

    constructor ( @InjectModel(Consulta) private model: ModelType<Consulta>) {}

    async findById(id: string): Promise<Consulta> {
        return await this.model.findById(id);
    }

    async findAll(): Promise<Consulta> {
        return this.model.find().sort({ dataConnsulta: 'desc' }).lean();
    }

    async create(obj: ConsultaCreateInput): Promise<Consulta> {
        return await this.model.create(obj);
    }

    async delete(id: string) {
        return await this.model.findByIdAndRemove(id);
    }
}
