declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_HOST: string;
      DB_PORT: string;
      DB_USER: string;
      DB_PASS: string;
      DB_NAME: string;
      MYSQL_ROOT_PASSWORD: string;
      NODE_ENV: string;
      DB_NAME: string;
    }
  }
}

export {};
