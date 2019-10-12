import { Clinica, ClinicaCreateInput, ClinicaUpdateInput } from './clinica.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';

@Injectable()
export class ClinicaService {

    constructor(
        @InjectModel(Clinica) private model: ModelType<Clinica>
    ) { }

    async findById (id: string): Promise<Clinica> {
        return await this.model
            .findById(id)
            .populate('secretarios')
            .populate('medicos')
            .populate('enfermeiros')
            .populate('clientes')
            .lean();
    }

    async findAll (): Promise<Clinica> {
        return this.model
            .find()
            .populate('secretarios')
            .populate('medicos')
            .populate('enfermeiros')
            .populate('clientes')
            .sort({ nome: 'asc' })
            .lean();
    }

    async create (obj: ClinicaCreateInput): Promise<Clinica> {
        const created = await this.model.create({
            obj
        });

        return this.findById(created._id);
    }

    async delete ( id: string ) {
        return await this.model
            .findOneAndRemove({ _id : id })
            .populate('secretarios')
            .populate('medicos')
            .populate('enfermeiros')
            .populate('clientes')
            .lean();
    }

    async update ( id: string, obj: ClinicaUpdateInput ) {
        return await this.model
            .findOneAndUpdate({ _id : id }, obj)
            .lean()
            .populate('secretarios')
            .populate('medicos')
            .populate('enfermeiros')
            .populate('clientes');
    }

}

