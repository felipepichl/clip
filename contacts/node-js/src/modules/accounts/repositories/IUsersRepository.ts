import { User } from '../domain/User';

interface IUsersRepository {
  create(data: User): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(user_id: string): Promise<User>;
}

export { IUsersRepository };
