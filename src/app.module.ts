import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/database/database.module';
import { getEnvPath } from './common/helper/env.helper';

const envFilePath = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
