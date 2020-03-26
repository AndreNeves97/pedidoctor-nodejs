import { Injectable } from '@nestjs/common';
import { MonitoringService } from './common/monitoring/monitoring.service';
import { DomainService } from './domain/domain.service';

@Injectable()
export class AppService {
    constructor(
        public monitoring: MonitoringService,
        public domain : DomainService
    ) {

    }

    public msg = 'Página inicial do servidor';


    index() {
        return {
            "msg": this.msg,
            "routes": this.domain.getApiRoutes(),
            "status": this.monitoring.getStatus()
        };
    }

}
