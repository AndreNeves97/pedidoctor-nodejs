import { Test, TestingModule } from '@nestjs/testing';
import { MedicamentoDosagemService } from './medicamento-dosagem.service';

describe('MedicamentoDosagemService', () => {
    const service = new MedicamentoDosagemService();

    it('Teste 1', () => {

        expect(
            service.calculoDosagem(1, 4, 41)
        ).toBe('Posologia: 40 gotas de 6 em 6 horas.');

    });

    it('Teste 2', () => {

        expect(
            service.calculoDosagem(2, 4, 39)
        ).toBe('Posologia: 1,95 ml.');

    });

    it('Teste 3', () => {

        expect(
            service.calculoDosagem(3, 11, 30)
        ).toBe('Posologia: 10 ml de 8 em 8 horas.');

    });

    it('Teste 4', () => {

        expect(
            service.calculoDosagem(4, 0, 4)
        ).toBe('Posologia: 0,5 ml de 12 em 12 horas.');

    });

    it('Teste 5', () => {

        expect(
            service.calculoDosagem(4, 0, 6)
        ).toBe('Posologia: 1 ml de 12 em 12 horas.');

    });

});
