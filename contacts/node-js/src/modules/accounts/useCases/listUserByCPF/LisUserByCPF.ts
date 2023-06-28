import { User } from '@modules/accounts/domain/User'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { IUseCase } from '@shared/core/domain/IUseCase'
import { AppError } from '@shared/error/AppError'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  cpf: string
}

interface IRespose {
  user: User
}

@injectable()
class LisUserByCPF implements IUseCase<IRequest, IRespose> {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(
    { cpf }: IRequest,
    response: IRespose,
  ): Promise<IRequest | IRespose> {
    if (!cpf) {
      throw new AppError('CPF is Required', 409)
    }

    const user = await this.usersRepository.findByCpf(cpf)

    response.user = user

    return response
  }
}

export { LisUserByCPF }
