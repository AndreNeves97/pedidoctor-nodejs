import { Injectable } from '@nestjs/common';
import { MonitoringService } from './common/monitoring/monitoring.service';
import { DomainService } from './domain/domain.service';

@Injectable()
export class AppService {
    constructor(
        private monitoring: MonitoringService,
        private domain : DomainService
    ) {

    }

    private msg = 'Página inicial do servidor';


    index() {
        return {
            "msg": this.msg,
            "routes": this.domain.getApiRoutes(),
            "status": this.monitoring.getStatus()
        };
    }

}
