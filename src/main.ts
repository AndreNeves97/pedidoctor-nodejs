import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter()
    );

    app.enableCors({
        origin: 'https://pedi-doctor.firebaseapp.com'
    });

    await app.listen(parseInt(process.env.PORT) || 3000, '0.0.0.0');
}
bootstrap();