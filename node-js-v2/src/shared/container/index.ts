import { container } from 'tsyringe';

import '@modules/accounts/providers';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IssuesRepository } from '@modules/issues/infra/typeorm/repositories/IssuesRepository';
import { IIssuesRepository } from '@modules/issues/repositories/IIssuesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IIssuesRepository>(
  'IssuesRepository',
  IssuesRepository,
);
