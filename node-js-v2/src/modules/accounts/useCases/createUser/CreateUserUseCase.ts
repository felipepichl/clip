import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/error/AppError';

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

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({ name, email, password: passwordHash });
  }
}

export { CreateUserUseCase };
