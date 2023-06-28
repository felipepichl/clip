import { User } from '@modules/accounts/domain/User'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { IUseCase } from '@shared/core/domain/IUseCase'
import { AppError } from '@shared/error/AppError'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  cpf: string
}

interface IResponse {
  user: User
}

@injectable()
class ListUserByCPF implements IUseCase<IRequest, IResponse> {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ cpf }: IRequest): Promise<IResponse> {
    if (!cpf) {
      throw new AppError('CPF is Required', 409)
    }

    const user = await this.usersRepository.findByCPF(cpf)

    if (!user) {
      throw new AppError('User not found', 404)
    }

    return { user }
  }
}

export { ListUserByCPF }
