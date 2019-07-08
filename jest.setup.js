// eslint-disable-next-line import/no-extraneous-dependencies
const dotenv = require('dotenv');

process.env.NODE_CONFIG_DIR = `${__dirname}/config/`;

initDotEnv(dotenv);

jest.setTimeout(10000);

function initDotEnv() {
  const { error } = dotenv.config({ path: `${process.cwd()}/.env` });
  if (error) {
    console.warn("Did you execute 'npm run exportEnv'?");
    throw new Error(error);
  }
}
