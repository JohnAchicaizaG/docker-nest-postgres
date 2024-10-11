import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { fstat } from 'fs';

async function bootstrap() {
  const logger = Logger
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
    })
  )

  await app.listen(3000);
  logger.log(`🚀🚀🚀 Application listening on port 3000 🚀🚀🚀` );
}
bootstrap();
