import { Test, TestingModule } from '@nestjs/testing';
import { EmpresaResolver } from './empresa.resolver';

describe('EmpresaResolver', () => {
  let resolver: EmpresaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpresaResolver],
    }).compile();

    resolver = module.get<EmpresaResolver>(EmpresaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
