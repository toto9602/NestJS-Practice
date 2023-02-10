import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getEnvPath } from './common/helper/env.helper';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';

const envFilePath = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
