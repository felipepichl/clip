import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/error/AppError';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, email, password }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (user) {
      throw new AppError('Users already exists', 400);
    }

    await this.usersRepository.create({ name, email, password });
  }
}

export { CreateUserUseCase };
