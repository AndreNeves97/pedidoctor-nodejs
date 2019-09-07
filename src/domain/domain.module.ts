import { Module } from '@nestjs/common';
import { FeastModule } from './feast/feast.module';
import { SupperModule } from './supper/supper.module';
import { PedilandiaModule } from './pedilandia/pedilandia.module';

@Module({
    imports: [
        PedilandiaModule,
        FeastModule,
        SupperModule,

    ]
})
export class DomainModule {

}
