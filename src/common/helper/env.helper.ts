import { existsSync } from 'fs';
import { resolve } from 'path';

export function getEnvPath(dest: string): string {
  const fallback = resolve(`${dest}/.env.development`);
  console.log(fallback);
  console.log(process.env.NODE_ENV);
  // NODE_ENV가 set되면, 해당 파일. 안 되면 .env.development
  const env = process.env.NODE_ENV;
  const fileName = env ? `.env.${env}` : '.env.development';

  const filePath = resolve(`${dest}/${fileName}`);

  const validatedFilePath = existsSync(filePath) ? filePath : fallback;

  return validatedFilePath;
}
