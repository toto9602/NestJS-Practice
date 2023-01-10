import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config as dotenv } from 'dotenv';
import { getEnvPath } from './common/helper/env.helper';

dotenv({ path: getEnvPath(`${__dirname}/common/envs`) });

function buildSwagger(app: INestApplication) {
  const docs = new DocumentBuilder()
    .setTitle('Nest-Practice-API')
    .setDescription('API Descriptions')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, docs);
  SwaggerModule.setup('swagger', app, document);
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Production 환경에서는 swagger docs를 build하지 않음.
  if (process.env.API_DOCS === 'true') {
    buildSwagger(app);
  }
  await app.listen(3000);
}
bootstrap();
