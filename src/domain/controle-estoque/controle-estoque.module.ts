import { Module } from '@nestjs/common';
import { EmpresaResolver } from './empresa/empresa.resolver';
import { ItemEstoqueResolver } from './item-estoque/item-estoque.resolver';
import { ItemEstoqueService } from './item-estoque/item-estoque.service';
import { EmpresaService } from './empresa/empresa.service';
import { ItemEstoqueCatController } from './item-estoque-cat/item-estoque-cat.controller';
import { ItemEstoqueCatService } from './item-estoque-cat/item-estoque-cat.service';

@Module({
  providers: [EmpresaResolver, ItemEstoqueResolver, ItemEstoqueService, EmpresaService, ItemEstoqueCatService],
  controllers: [ItemEstoqueCatController]
})
export class ControleEstoqueModule {}
