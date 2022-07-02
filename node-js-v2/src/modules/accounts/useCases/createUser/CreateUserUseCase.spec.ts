import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from './CreateUserUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Create a user', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to create a new user', async () => {
    const user = {
      name: 'John Due',
      email: 'jonhdue@example.com',
      password: 'hsh123',
    };

    await createUserUseCase.execute(user);

    const { email } = user;

    const userCreated = await usersRepositoryInMemory.findByEmail(email);

    expect(userCreated).toHaveProperty('id');
  });
});
