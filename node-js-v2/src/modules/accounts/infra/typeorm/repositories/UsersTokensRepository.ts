import { Repository } from 'typeorm';

import { ICreateUserTokensDTO } from '@modules/accounts/dtos/ICreateUserTokensDTO';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { AppDataSource } from '@shared/infra/typeorm';

import { UserTokens } from '../entities/UserTokens';

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = AppDataSource.getRepository(UserTokens);
  }

  async create({
    user_id,
    expires_date,
    refresh_token,
  }: ICreateUserTokensDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      user_id,
      expires_date,
      refresh_token,
    });

    await this.repository.save(userToken);

    return userToken;
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<UserTokens> {
    const userToken = await this.repository.findOne({
      where: { user_id, refresh_token },
    });

    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { UsersTokensRepository };
