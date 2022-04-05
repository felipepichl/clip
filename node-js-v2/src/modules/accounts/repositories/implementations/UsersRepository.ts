import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/entities/User';
import { v4 as uuid } from 'uuid';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create(data: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, { id: uuid() }, data);
  }
  findByEmail(email: string): User {
    const user = this.users.find(user => user.email === email);

    return user;
  }
}

export { UsersRepository };
