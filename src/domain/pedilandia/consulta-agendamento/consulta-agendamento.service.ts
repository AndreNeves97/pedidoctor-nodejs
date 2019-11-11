
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';
import { ConsultaAgendamento, ConsultaAgendamentoInput, ConsultaAgendamentoUpdate } from './consulta-agendamento.model';


@Injectable()
export class ConsultaAgendamentoService {
    constructor(@InjectModel(ConsultaAgendamento) private model: ModelType<ConsultaAgendamento>) { }
    

    async findById(id: string): Promise<ConsultaAgendamento> {
        const objs = await 
            this.getBaseFindQuery({_id: id})
            .limit(1)
            .lean();
        
        return objs[0];
    }

    async findAll(conditions = {}, projection = {}, offset = 0, limit = 0) : Promise<ConsultaAgendamento> {
        return this.getBaseFindQuery(conditions, projection)
            .skip(offset)
            .limit(limit)
            .sort({ dataAgendada: -1 })
            .lean();
    }

    async create(obj: ConsultaAgendamentoInput): Promise<ConsultaAgendamento> {
        console.log(obj)
        
        const created = await this.model.create({
            ...obj
        });
        
        return this.findById(created._id);
    }

    async delete(id: string) {
        return await this.model
            .findOneAndRemove({_id: id})
            .populate('paciente')
            .populate('clinica')
            .populate('medico')
            .populate('tipo')
            .populate('sintomasObservados')
            .populate('realizacao');
    }


    async update(id: string, obj: ConsultaAgendamentoUpdate) {    
        return await this.model
            .findOneAndUpdate({_id: id}, obj)
            .populate('paciente')
            .populate('clinica')
            .populate('medico')
            .populate('tipo')
            .populate('sintomasObservados')
            .populate('realizacao')
            .lean();
    }



    getBaseFindQuery(conditions = {}, projection = {}) {
        return this.model
            .find(conditions, projection)
            .populate('paciente')
            .populate('clinica')
            .populate('medico')
            .populate('tipo')
            .populate('sintomasObservados')
            .populate('realizacao')
    }


}
