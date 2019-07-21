import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

let isProduction = false;
if (process.argv.length === 3) {
  isProduction = process.argv[2] === 'prod';
}

const envDirectory = path.join(__dirname, '../src/environments/');
const templateDirectory = path.join(envDirectory, 'templates/');
const targetEnvFile = isProduction ? 'environment.prod.ts' : 'environment.ts';

const overwriteValues = {
  CANARIA_API_KEY: process.env.CANARIA_API_KEY,
  CANARIA_AUTH_DOMAIN: process.env.CANARIA_AUTH_DOMAIN,
  CANARIA_DATABASE_URL: process.env.CANARIA_DATABASE_URL,
  CANARIA_PROJECT_ID: process.env.CANARIA_PROJECT_ID,
  CANARIA_STORAGE_BUCKET: process.env.CANARIA_STORAGE_BUCKET,
  CANARIA_MESSAGING_SENDER_ID: process.env.CANARIA_MESSAGING_SENDER_ID,
};

const environmentTemplate = fs.readFileSync(path.join(templateDirectory, targetEnvFile), { encoding: 'utf-8' });
const output = ejs.render(environmentTemplate, overwriteValues);
fs.writeFileSync(path.join(envDirectory, targetEnvFile), output);

process.exit(0);
