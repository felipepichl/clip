import dotenv from 'dotenv';

import jestConfig from './jest.config';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

export default {
  ...jestConfig,
  testEnvironment: './src/shared/infra/prisma/prisma-test-environment.ts',
  testRegex: '.e2e-spec.ts$',
};
