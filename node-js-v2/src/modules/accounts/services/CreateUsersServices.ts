import { AppError } from 'app/error/AppError';

import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUsersServices {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email, password }: IRequest): void {
    const user = this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Users already exists', 400);
    }

    this.usersRepository.create({ name, email, password });
  }
}

export { CreateUsersServices };
