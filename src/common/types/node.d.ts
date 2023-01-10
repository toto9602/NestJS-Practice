declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      DB_NAME: string;
      API_DOCS: string;
    }
  }
}

export {};
