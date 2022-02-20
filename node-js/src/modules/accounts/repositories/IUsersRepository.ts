import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  listAll(): Promise<User[]>;
  findByPhone(phone: string): Promise<User>;
}

export { IUsersRepository };
