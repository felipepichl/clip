import { injectable, inject } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async handle({ name, phone }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByPhone(phone);

    if (userAlreadyExists) {
      throw new Error('Users already exists');
    }

    await this.usersRepository.create({
      name,
      phone,
    });
  }
}

export { CreateUserUseCase };
