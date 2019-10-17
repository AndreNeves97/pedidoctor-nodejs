import { Usuario, UsuarioInput, UsuarioUpdate } from './usuario.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';
import { UserService } from '../../../common/security/user/user.service';
import { User, UserCreateFromFirebaseInput } from '../../../common/security/user/user.model';

@Injectable()
export class UsuarioService extends UserService<Usuario> {

    constructor (
        @InjectModel(Usuario) private model: ModelType<Usuario>
    ) { 
        super(model);
    }

    async findById ( id: string ): Promise<Usuario> {
        return await this.model
            .findById(id)
            .populate('responsavelPor')
            .populate('usoMedicamentos')
            .populate('acontecimentos')
            .lean();
    }
    
    async findAll ( ): Promise<Usuario[]> {
        let result = await this.model.aggregate([
            {
                $lookup: {            
                    from: "Pedilandia_Consulta",
                    let: {"paciente_id": "$_id"},
                    pipeline: [ 
                        { $match:
                             { $expr:
                                { $and:
                                   [    
                                     { $eq: [ "$paciente",  "$$paciente_id" ] },
                                   ]
                                }
                             }
                        },
                        {
                            $count: "paciente"
                        }
                    ],
                    as: "consultas"
                }
            },
            
            {
                $project : {
                    "_id" : 1,
                    "roles" : 1,
                    "firebaseUid" : 1,
                    "nome" : 1,
                    "email" : 1,
                    "fotoUrl" : 1,
                    "createdAt" : 1,
                    "updatedAt" : 1,
                    "qtConsultas": {$max: "$consultas.paciente"}
                }
            },   
        ]);

        console.log(result);
        
        return result;
        

        // return await this.model
        //     .find()
        //     .populate('responsavelPor')
        //     .populate('usoMedicamentos')
        //     .populate('acontecimentos')
        //     .lean();
            
    }

    async create ( obj: UserCreateFromFirebaseInput | UsuarioInput ): Promise<Usuario> {
        const created = await this.model.create({
            ...obj
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
            .findOneAndUpdate({ _id : id }, obj)
            .populate('responsavelPor')
            .populate('usoMedicamentos')
            .populate('acontecimentos')
            .lean();
    }
}
