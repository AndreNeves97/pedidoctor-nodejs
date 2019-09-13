import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { RolesGuard } from './common/security/user/roles.guard';


async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter()
    );



    app.enableCors({
        origin: 'http://localhost:4200'
    });

    await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();