import { Module } from '@nestjs/common';
import { ControleEstoqueModule } from './controle-estoque/controle-estoque.module';
import { ControlePagamentoModule } from './controle-pagamento/controle-pagamento.module';

@Module({
  imports: [ControleEstoqueModule, ControlePagamentoModule]
})
export class CoreModule {}
