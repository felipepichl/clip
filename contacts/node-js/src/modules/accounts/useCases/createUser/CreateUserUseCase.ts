import { User } from '@modules/accounts/domain/User'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'

import { IUseCase } from '@shared/core/domain/IUseCase'
import { AppError } from '@shared/error/AppError'

interface IRequest {
  name: string
  cpf: string
  whatsapp: string
}

@injectable()
class CreateUserUseCase implements IUseCase<IRequest, void> {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, cpf, whatsapp }: IRequest): Promise<void> {
    if (!cpf) {
      throw new AppError('CPF is required', 400)
    }

    const userAllReadyExists = await this.usersRepository.findByCPF(cpf)

    if (userAllReadyExists) {
      throw new AppError(`User with CPF '${cpf}' already exists`, 409)
    }

    const user = User.createUser({
      name,
      cpf,
      whatsapp,
    })

    await this.usersRepository.create(user)
  }
}

export { CreateUserUseCase }
