import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ConsultaTipo, ConsultaTipoInput, ConsultaTipoUpdate } from './consulta-tipo.model';
import { ModelType } from 'typegoose';

@Injectable()
export class ConsultaTipoService {

    constructor (
        @InjectModel(ConsultaTipo) private model: ModelType<ConsultaTipo>
    ) { }

    async findById ( id: string ): Promise<ConsultaTipo> {
        return await this.model   
            .findById(id)
            .lean();
    }

    async findAll (  ): Promise<ConsultaTipo[]> {
        return await this.model
            .find()
            .sort({ nome : 'asc' })
            .lean();
    }

    async create ( obj: ConsultaTipoInput ): Promise<ConsultaTipo> {
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

    async update ( id: string, obj: ConsultaTipoUpdate ) {
        return await this.model
            .findOneAndUpdate({ _id : id }, obj)
            .lean();
    }

}

