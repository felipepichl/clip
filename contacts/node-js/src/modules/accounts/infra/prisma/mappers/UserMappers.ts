import { User } from '@modules/accounts/domain/User';
import { User as RawUser } from '@prisma/client';

import { Mapper } from '@shared/core/infra/Mapper';

class UserMappers extends Mapper<User> {
  static toPersistence(user: User): User {
    return user;
  }

  static toDomain(raw: RawUser): User {
    return User.createUser(raw);
  }
}

export { UserMappers };
