import { User } from '../domain/User'

interface IUsersRepository {
  create(data: User): Promise<void>
  findByCPF(cpf: string): Promise<User>
  findById(user_id: string): Promise<User>
}

export { IUsersRepository }
