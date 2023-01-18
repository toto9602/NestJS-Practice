import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DashboardCommandModule } from './commands/dashboard/dashboard.command.module';
import { SlackCommandModule } from './commands/slack/slack.command.module';
import { DatabaseModule } from './common/database/database.module';
import { getEnvPath } from './common/helper/env.helper';

const envFilePath = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    DashboardCommandModule,
    SlackCommandModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
