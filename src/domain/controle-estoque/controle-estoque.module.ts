import { Module } from '@nestjs/common';
import { EmpresaResolver } from './empresa/empresa.resolver';
import { ItemEstoqueResolver } from './item-estoque/item-estoque.resolver';
import { ItemEstoqueService } from './item-estoque/item-estoque.service';
import { EmpresaService } from './empresa/empresa.service';

@Module({
  providers: [EmpresaResolver, ItemEstoqueResolver, ItemEstoqueService, EmpresaService]
})
export class ControleEstoqueModule {}
