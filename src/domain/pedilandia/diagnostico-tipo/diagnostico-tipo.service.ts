import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { DiagnosticoTipo, DiagnosticoTipoInput, DiagnosticoTipoUpdate } from './diagnostico-tipo.model';
import { ModelType } from 'typegoose';

@Injectable()
export class DiagnosticoTipoService {

    constructor ( 
        @InjectModel(DiagnosticoTipo) private model: ModelType<DiagnosticoTipo>
    ) { }

    async findById ( id: string ): Promise<DiagnosticoTipo> {
        return await this.model
            .findById(id)
            .lean();
    }

    async findAll (): Promise<DiagnosticoTipo> {
        return await this.model
            .find()
            .sort({ nome : 'asc' })
            .lean();
    }

    async create ( obj: DiagnosticoTipoInput ): Promise<DiagnosticoTipo> {
        const created = await this.model.create({
            obj
        });

        return this.findById(created._id);
    }

    async delete ( id: string ) {
        return await this.model
            .findOneAndRemove({ _id : id })
            .lean();
    }

    async update ( id: string, obj: DiagnosticoTipoUpdate ) {
        return this.model
            .findOneAndUpdate({ _id : id }, obj)
            .lean();
    }

}
