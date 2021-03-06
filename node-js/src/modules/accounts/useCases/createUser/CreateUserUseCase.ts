import { injectable, inject } from 'tsyringe';

import { AppError } from '../../../../shared/errors/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute({ name, phone }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByPhone(phone);

    if (userAlreadyExists) {
      throw new AppError('Users already exists');
    }

    await this.usersRepository.create({
      name,
      phone,
    });
  }
}

export { CreateUserUseCase };
