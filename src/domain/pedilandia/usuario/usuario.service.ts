import { Usuario, UsuarioInput, UsuarioUpdate } from './usuario.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';

@Injectable()
export class UsuarioService {

    constructor (
        @InjectModel(Usuario) private model: ModelType<Usuario>
    ) { }

    async findById ( id: string ): Promise<Usuario> {
        return await this.model
            .findById(id)
            .populate('responsavelPor')
            .populate('usoMedicamentos')
            .populate('acontecimentos')
            .lean();
    }
    
    async findAll ( ): Promise<Usuario> {
        return await this.model
            .find()
            .populate('responsavelPor')
            .populate('usoMedicamentos')
            .populate('acontecimentos')
            .lean();
            
    }

    async create ( obj: UsuarioInput ): Promise<Usuario> {
        const created = await this.model.create({
            obj
        });

        return this.findById(created._id);
    }

    async delete ( id: string ) {
        return await this.model
            .findOneAndRemove({ _id : id })
            .populate('responsavelPor')
            .populate('usoMedicamentos')
            .populate('acontecimentos')
            .lean();
    }

    async update ( id: string, obj: UsuarioUpdate ) {
        return await this.model
            .findOneAndUpdate({ _id : id }, obj, { lean : true })
            .populate('responsavelPor')
            .populate('usoMedicamentos')
            .populate('acontecimentos');
        }

}
