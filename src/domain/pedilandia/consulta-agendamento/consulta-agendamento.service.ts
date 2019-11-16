
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

    async findAll(conditions = {}, projection = {}, offset = 0, limit = 0) : Promise<ConsultaAgendamento[]> {
        return await this.getBaseFindQuery(conditions, projection)
            .skip(offset)
            .limit(limit)
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
        const query = this.model
            .findOneAndRemove({_id: id})
            .lean();

        return await this.populateQuery(query);
    }


    async update(id: string, obj: ConsultaAgendamentoUpdate) {    
        const query = this.model
            .findOneAndUpdate({_id: id}, obj)
            .lean();
        
        return await this.populateQuery(query);
    }



    getBaseFindQuery(conditions = {}, projection = {}) {
        const query = this.model.find(conditions, projection)
            
        return this.populateQuery(query)
    }

    populateQuery(query) {
        return query
            .populate('paciente')
            .populate('clinica')
            .populate('medico')
            .populate('tipo')
            .populate('sintomasObservados')
            .populate('realizacao.diagnostico.tipo')
            .populate('realizacao.diagnostico.remarcacaoConsulta')
            .populate('realizacao.diagnostico.doencasCuradas')
            .populate('realizacao.diagnostico.doencasDiagnosticadas')
            .populate('realizacao.diagnostico.medicamentosReceitados');
    }


    async getHorariosIndisponiveis(dia : string) : Promise<Date[]> {

        // Offset de três horas de fuso horário
        const timezoneOffset = 3 * 60 * 60 * 1000;

        let start : Date = new Date(`${dia}T00:00:00.000Z`);
        let end : Date = new Date(`${dia}T23:59:59.999Z`);

        start   = new Date( start.getTime() + timezoneOffset );
        end     = new Date( end.getTime() + timezoneOffset );

        

        const filters = {
            $gte: start,
            $lte : end
        };

        const conditions = {
            dataAgendada: filters
        };

        const agendamentos = await this.findAll(conditions);

        const horarios = agendamentos.map(v => v.dataAgendada);

        return horarios;
    }
}
