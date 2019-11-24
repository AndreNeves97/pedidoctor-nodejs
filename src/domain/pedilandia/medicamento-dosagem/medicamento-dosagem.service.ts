import { Injectable } from '@nestjs/common';

@Injectable()
export class MedicamentoDosagemService {
    /**
     * Descrição do modelo:
     * 
     * cod:         Código do medicamento
     * nome:        Nome do medicamento
     * descricao:   Descrição do medicamento
     * 
     * posologia.intervalo:     
     *      Intervalo de horas entre duas doses. Se igual a zero, não 
     *      há definição
     * 
     * posologia.tipoDose:      
     *      Dose é aplicada em gotas ou em 'ml'
     * 
     * posologia.maxima:        
     *      Valor máximo para a dose
     * 
     * posologia.classificacao: 
     *      Como as faixas de dosagem são classificadas: Peso ou idade
     *
     * 
     * 
     * posologia.faixas.min: 
     *      Peso ou idade mínima. Se igual a zero, não há limite mínimo
     * 
     * posologia.faixas.max:
     *      Peso ou idade máxima. Se igual a zero, não há limite máximo
     * 
     * posologia.faixas.valorFixo: 
     *      Valor inicial para essa faixa de dosagem
     * 
     * posologia.faixas.proporcional: 
     *      Valor de dosagem que é multiplicado pelo peso/idade
     *      (de acordo com a classificação das faixas)
     * 
     *
     */
    medicamentos = [
        {
            cod: 1,
            nome: 'DIPIRONA Gotas 500mg/ml',
            descricao: '',
            posologia: {
                intervalo: 6,
                tipoDose: 'gotas',
                maxima: 40,
                classificacao: 'peso',
                faixas: [
                    // Faixa única, que abrange todos os casos
                    {
                        min: 0, 
                        max: 0,
                        valorFixo: 0,
                        proporcional: 1
                    },
                ]
            }
        },
        {
            cod: 2,
            nome: 'DIPIRONA Injetável',
            descricao: '',
            posologia: {
                intervalo: 0,
                tipoDose: 'ml',
                maxima: 2,
                classificacao: 'peso',
                faixas: [
                    // Faixa única, que abrange todos os casos
                    {
                        min: 0, 
                        max: 0,
                        valorFixo: 0,
                        proporcional: 1 / 20
                    },
                ]
            }
        },
        {
            cod: 3,
            nome: 'CARBOCISTEÍNA Xarope Infantil 20 mg/ml',
            descricao: '',
            posologia: {
                intervalo: 8,
                tipoDose: 'ml',
                maxima: 0,
                classificacao: 'idade',
                faixas: [
                    {
                        min: 1, 
                        max: 4,
                        valorFixo: 2.5,
                        proporcional: 0
                    },
                    {
                        min: 5, 
                        max: 10,
                        valorFixo: 5,
                        proporcional: 0
                    },
                    {
                        min: 10, 
                        max: 0,
                        valorFixo: 10,
                        proporcional: 0
                    },
                ]
            }
        },
        {
            cod: 4,
            nome: 'RANITIDINA Solução Oral',
            descricao: '',
            posologia: {
                intervalo: 12,
                tipoDose: 'ml',
                maxima: 0,
                classificacao: 'peso',
                faixas: [
                    {
                        min: 0, 
                        max: 4,
                        valorFixo: 0,
                        proporcional: 0.125
                    },
                    {
                        min: 5, 
                        max: 7,
                        valorFixo: 1,
                        proporcional: 0
                    },
                    {
                        min: 8, 
                        max: 10,
                        valorFixo: 1.5,
                        proporcional: 0
                    },
                    {
                        min: 11, 
                        max: 0,
                        valorFixo: 2,
                        proporcional: 0
                    },
                ]
            }
        }
    ];
        
    getMedicamento(cod : number) {
        return this.medicamentos.filter(v => v.cod == cod)[0];
    }

    calculoDosagem(cod : number, idade : number, peso : number) {
        const med = this.getMedicamento(cod);

        let comparacaoFaixas, dose;
        
        switch(med.posologia.classificacao) {
            case 'peso':
                comparacaoFaixas = peso;
                break;

            case 'idade':
                    comparacaoFaixas = idade;
                    break;
        }

        let faixa = null;
        
        for(let i = 0; i < med.posologia.faixas.length; i++) {
            const atual = med.posologia.faixas[i];

            if(

                atual.min == 0 && atual.max == 0                ||
                atual.min == 0 && comparacaoFaixas <= atual.max ||
                atual.max == 0 && comparacaoFaixas >= atual.min ||
                comparacaoFaixas <= atual.max && comparacaoFaixas >= atual.min

            ) {

                faixa = atual;
                break;
            
            }
        }


        dose = faixa.valorFixo + faixa.proporcional * comparacaoFaixas;
        dose = Math.floor(dose * 100) / 100;

        if(med.posologia.maxima > 0)
            dose = Math.min(dose, med.posologia.maxima);

        dose = `${dose}`.replace('.', ',');

        const intervalo = med.posologia.intervalo;
        let intervaloMsg = '';
        
        if(intervalo > 0) {
            intervaloMsg = ` de ${ intervalo } em ${ intervalo } horas`
        }

        return `Posologia: ${ dose } ${ med.posologia.tipoDose}${intervaloMsg}.`;
    }
}
