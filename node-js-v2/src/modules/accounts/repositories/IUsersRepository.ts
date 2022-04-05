import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): void;
  findByEmail(email: string): User;
}

export { IUsersRepository };
