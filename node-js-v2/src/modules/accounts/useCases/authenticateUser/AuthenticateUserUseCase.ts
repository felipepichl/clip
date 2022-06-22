import { authConfig } from '@config/auth';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject } from 'tsyringe';

import { AppError } from '@shared/error/AppError';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorret email/pawword combination');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Incorret email/pawword combination');
    }

    const { secret, expiresIn } = authConfig;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    const returnResponse: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    return returnResponse;
  }
}

export { AuthenticateUserUseCase };
