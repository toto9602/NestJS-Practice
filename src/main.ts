import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';
// import { getLogLevel } from './common/log-level/getter';
import { Logger } from '@nestjs/common';
async function bootstrap() {
  await CommandFactory.run(AppModule, new Logger());
}
bootstrap();
