import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/entities/User';
import { getRepository, Repository } from 'typeorm';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  private constructor() {
    this.repository = getRepository(User);
  }

  public static INSTANCE: UsersRepository;

  public static getIntance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      return new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
    });

    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne(email);

    return user;
  }
}

export { UsersRepository };
