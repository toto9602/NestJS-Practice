import { AppDataSource } from './data-source';
import { DataSource } from 'typeorm';

import {
  CATS_REPOSITORY_TOKEN,
  DATA_SOURCE_TOKEN,
} from '../di-tokens/db.di-token';
import { Cat } from '../../cats/entities/cat.entity';

export const databaseProviders = [
  {
    provide: DATA_SOURCE_TOKEN,
    useFactory: async () => {
      return AppDataSource.initialize();
    },
  },
  {
    provide: CATS_REPOSITORY_TOKEN,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cat),
    inject: [DATA_SOURCE_TOKEN],
  },
];
