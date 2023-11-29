import { Module } from '@nestjs/common';
import { ConfigModule, registerAs } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/database/database.module';
import { getEnvPath } from './common/helper/env.helper';
import emailConfig from './common/config/email.config';
import { validationSchema } from './common/config/validation.schema';

const envFilePath = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath,
      load: [emailConfig],
      validationSchema: validationSchema,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
