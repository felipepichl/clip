import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '@modules/accounts/useCases/createUser/CreateUserUseCase';
import { UploadUserAvatarUseCase } from '@modules/accounts/useCases/uploadUserAvatar/UploadUserAvatarUseCase';
import { AppError } from '@shared/error/AppError';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let uploadUserAvatarUseCase: UploadUserAvatarUseCase;

describe('Upload Avatar', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    uploadUserAvatarUseCase = new UploadUserAvatarUseCase(
      usersRepositoryInMemory,
    );
  });

  it('should be able to upload an user avatar', async () => {
    const user: ICreateUserDTO = {
      name: 'John Due',
      email: 'johndue@example.com',
      password: 'hash123',
    };

    await createUserUseCase.execute(user);

    const { email } = user;

    const userCreated = await usersRepositoryInMemory.findByEmail(email);

    const { id: user_id } = userCreated;

    await uploadUserAvatarUseCase.execute({
      user_id,
      avatar_file: 'avatar.jpg',
    });

    expect(userCreated.avatar).toBe('avatar.jpg');
  });

  it('should be able to upload avatar a non-existing user', async () => {
    await expect(
      uploadUserAvatarUseCase.execute({
        user_id: 'non-existing',
        avatar_file: 'avatar.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
