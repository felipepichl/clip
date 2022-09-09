import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { authConfig } from '@config/auth';
import { IHashProvider } from '@modules/accounts/providers/HashProvider/models/IHashProvider';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { AppError } from '@shared/error/AppError';

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

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorret email/password combination');
    }

    const passwordMatch = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new AppError('Incorret email/password combination');
    }

    const { secret, expires_in_token: expiresIn } = authConfig;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    // await this.usersTokensRepository.create({
    //   user_id: user.id,
    //   expires_date: refresh_token_expires_date,
    //   refresh_token,
    // });

    const { name } = user;

    const returnResponse: IResponse = {
      user: {
        name,
        email,
      },
      token,
    };

    return returnResponse;
  }
}

export { AuthenticateUserUseCase };
