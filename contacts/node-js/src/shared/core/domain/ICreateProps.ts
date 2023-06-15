import { Replace } from '@shared/helpers/Replace';

import { UniqueEntityID } from './UniqueEntityID';

interface ICreateProps<T> {
  props: Replace<T, { created_at?: Date; update_at?: Date }>;
  id?: UniqueEntityID;
}

export { ICreateProps };
