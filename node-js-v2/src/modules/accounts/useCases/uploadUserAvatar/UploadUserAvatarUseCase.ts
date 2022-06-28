import { deleteFile } from '@utils/file';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/error/AppError';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UploadUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated can change avatar', 401);
    }

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatar_file;

    await this.usersRepository.create(user);
  }
}

export { UploadUserAvatarUseCase };
