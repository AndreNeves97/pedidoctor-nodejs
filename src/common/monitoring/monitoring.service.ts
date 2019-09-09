import { Injectable } from '@nestjs/common';

@Injectable()
export class MonitoringService {
    public getStatus() {
        return {
            "server": "ok",
            "mongodb": "ok",
            "google_cloud": "ok",
            "gitlab": "ok"
        };
    }
}
