import { LogLevel } from '@nestjs/common';
import { DEV_LOG_LEVEL, PROD_LOG_LEVEL } from './log-levels';

export function getLogLevel(env: string): LogLevel[] {
  const runningEnv = env ? env : 'development';

  switch (runningEnv) {
    case 'development':
      return DEV_LOG_LEVEL;

    case 'production':
      return PROD_LOG_LEVEL;
  }
}
