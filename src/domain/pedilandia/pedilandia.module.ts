import { Module } from '@nestjs/common';
import { ConsultasModule } from './consultas/consultas.module';

@Module({
  imports: [ConsultasModule]
})
export class PedilandiaModule {}
