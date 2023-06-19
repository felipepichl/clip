import { User } from '@modules/accounts/domain/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/error/AppError';

interface IRequest {
  name: string;
  cpf: string;
  whatsapp: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, cpf, whatsapp }: IRequest): Promise<void> {
    const userAllReadyExists = await this.usersRepository.findByCpf(cpf);

    if (userAllReadyExists) {
      throw new AppError('Users already exists', 400);
    }

    const user = User.createUser({
      name,
      cpf,
      whatsapp,
    });

    await this.usersRepository.create(user);
  }
}

export { CreateUserUseCase };
