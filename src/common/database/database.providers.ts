import { DATA_SOURCE_TOKEN } from '../di-tokens/db.di-token';
import { AppDataSource } from './data-source';

export const databaseProviders = [
  {
    provide: DATA_SOURCE_TOKEN,
    useFactory: async () => {
      return AppDataSource.initialize();
    },
  },
];
