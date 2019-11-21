import { Usuario, UsuarioInput, UsuarioUpdate } from './usuario.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';
import { UserService } from '../../../common/security/user/user.service';
import { User, UserCreateFromFirebaseInput } from '../../../common/security/user/user.model';
import { ClinicaService } from '../clinica/clinica.service';
import { ObjectId } from 'bson';

@Injectable()
export class UsuarioService extends UserService<Usuario> {

    constructor(
        @InjectModel(Usuario) private model: ModelType<Usuario>,
        private clinicaService : ClinicaService
    ) {
        super(model);
    }

    async findById(id: string): Promise<Usuario> {
        
        const conditions = {_id: id};
        return await this.find(conditions);

    }


    async findByEmail(email: string ) : Promise<Usuario> {

        const conditions = {email: email};
        return await this.find(conditions);

    }

    async findByFirebaseUid(uid: string): Promise<Usuario> {

        const conditions = {firebaseUid: uid};
        return await this.find(conditions);
        
    }

    async find(conditions = {}, projection = {}) : Promise<Usuario> {
        let user;
        
        user = await this.model
            .findOne(conditions)
            .populate('responsavelPor')
            .populate('usoMedicamentos')
            .populate('acontecimentos')
            .lean();

        user.atribuicoes = {
            cliente: await this.clinicaService.findAll({clientes: new ObjectId(user._id)}, { _id: 1 } ),
            gerente: await this.clinicaService.findAll({gerentes: new ObjectId(user._id)}, { _id: 1 } ),
            medico: await this.clinicaService.findAll({medicos: new ObjectId(user._id)}, { _id: 1 } ),
            secretario: await this.clinicaService.findAll({secretarios: new ObjectId(user._id)}, { _id: 1 } )
        };

        user.atribuicoes.cliente = user.atribuicoes.cliente.map(v => v._id);
        user.atribuicoes.gerente = user.atribuicoes.gerente.map(v => v._id);
        user.atribuicoes.medico = user.atribuicoes.medico.map(v => v._id);
        user.atribuicoes.secretario = user.atribuicoes.secretario.map(v => v._id);

        return user;
    }


    async findAll(conditions = {}, projection = {}, offset = 0, limit = 0): Promise<Usuario[]> {
        let result = await this.model.aggregate([
            {
                $match: {
                    ...conditions
                }
            },
            {
                $sort: {
                    nome: 1
                },
            },
            {
                $skip: offset
            },
            {
                $limit: limit
            },
            {
                $lookup: {
                    from: "Pedilandia_Consulta",
                    let: { "paciente_id": "$_id" },
                    pipeline: [
                        {
                            $match:
                            {
                                $expr:
                                {
                                    $and:
                                        [
                                            { $eq: ["$paciente", "$$paciente_id"] },
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
                $project: {
                    "_id": 1,
                    "roles": 1,
                    "firebaseUid": 1,
                    "nome": 1,
                    "email": 1,
                    "telefone": 1,
                    "isPaciente": 1,
                    "fotoUrl": 1,
                    "createdAt": 1,
                    "updatedAt": 1,
                    "qtConsultas": { $max: "$consultas.paciente" },
                    ...projection
                }
            },
        ]);

        result.map(
            (res) => {
                res.qtConsultas = res.qtConsultas == null ? 0 : res.qtConsultas;
            }
        )

        // console.log(result);

        return result;


        // return await this.model
        //     .find()
        //     .populate('reponsavelPor')
        //     .populate('us            this['success'](user);Medicamentos')
        //     .populate('acontecimentos')
        //     .lean();

    }

    async create(obj: UserCreateFromFirebaseInput | UsuarioInput): Promise<Usuario> {
        
        const created = await this.model.create({
            ...obj
        });

        return this.findById(created._id);
        
    }

    async delete(id: string) {
        return await this.model
            .findOneAndRemove({ _id: id })
            .populate('responsavelPor')
            .populate('usoMedicamentos')
            .populate('acontecimentos')
            .lean();
    }

    async update(id: string, obj: UsuarioUpdate) {
        return await this.model
            .findOneAndUpdate({ _id: id }, obj)
            .populate('responsavelPor')
            .populate('usoMedicamentos')
            .populate('acontecimentos')
            .lean();
    }

    async findByTipo(tipo: number) {
        return await this.model
            .find({ tipo: tipo })
            .populate('responsavelPor')
            .populate('usoMedicamentos')
            .populate('acontecimentos')
            .lean();
    }
}
