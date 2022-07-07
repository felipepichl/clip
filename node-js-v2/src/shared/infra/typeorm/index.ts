import 'reflect-metadata';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/shared/infra/typeorm/database.sqlite',
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized');
  })
  .catch(err => console.log(err));

export { AppDataSource };

/**
 * yarn typeorm migration:create src/shared/infra/typeorm/migrations/Name
 * yarn typeorm migration:run -d src/shared/infra/typeorm
 */
