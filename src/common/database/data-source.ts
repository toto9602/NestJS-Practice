import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['src/**/entities/*.entity.ts'],
  synchronize: true,
});

// export const AppDataSource = new DataSource({
//   type: 'sqlite',
//   database: 'test.sqlite3',
//   synchronize: true,
//   entities: ['src/**/entities/*.entity.ts'],
// });
