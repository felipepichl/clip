import { UsersRepository } from '@modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IIssuesRepository } from '@modules/issues/repositories/IIssuesRepository';
import { IssuesRepository } from '@modules/issues/repositories/implementations/IssuesRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IIssuesRepository>(
  'IssuesRepository',
  IssuesRepository,
);