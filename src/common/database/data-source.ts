import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'test.sqlite3',
  synchronize: true,
  entities: ['src/**/entities/*.entity.ts'],
});
