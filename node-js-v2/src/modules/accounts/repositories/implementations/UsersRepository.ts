import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/entities/User';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  private constructor() {
    this.users = [];
  }

  public static INSTANCE: UsersRepository;

  public static getIntance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      return new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email, password }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
      created_at: new Date(),
    });

    this.users.push(user);
  }
  findByEmail(email: string): User {
    const user = this.users.find(user => user.email === email);

    return user;
  }
}

export { UsersRepository };
