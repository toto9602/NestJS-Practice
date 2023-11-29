import { LogLevel } from '@nestjs/common';

export const DEV_LOG_LEVEL: LogLevel[] = ['log', 'error', 'warn', 'error'];

export const PROD_LOG_LEVEL: LogLevel[] = ['warn', 'error'];
