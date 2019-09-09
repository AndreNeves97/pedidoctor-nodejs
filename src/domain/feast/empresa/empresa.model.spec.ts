import { Empresa } from './empresa.model';

describe('Empresa.Model', () => {
  it('should be defined', () => {
    expect(new Empresa()).toBeDefined();
  });


  it('teste qualquer', () => {
    expect(5).toBe(5);
  }) ;

  it('teste qualquer2', () => {
    expect(52).toBe(52);
  }) ;

  it('teste qualquer3', () => {
    expect(2).toBe(2);
  }) ;
});
