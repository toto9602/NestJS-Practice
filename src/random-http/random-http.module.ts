import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RandomHttpService } from './random-http.service';
import { RandomHttpController } from './random-http.controller';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (ConfigService: ConfigService) => ({
        baseURL: ConfigService.get('RANDOM_NAME_BASE_URL'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [RandomHttpController],
  providers: [RandomHttpService],
})
export class RandomHttpModule {}
