import { AggregateRoot } from '@shared/core/domain/AggregateRoot';
import { UniqueEntityID } from '@shared/core/domain/UniqueEntityID';

interface IUserProps {
  name: string;
  cpf: string;
  whatsapp: string;
  created_at?: Date;
  updated_at?: Date;
}

class User extends AggregateRoot<IUserProps> {
  constructor(props: IUserProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get name(): string {
    return this.props.name;
  }

  get cpf(): string {
    return this.props.cpf;
  }

  get whatsapp(): string {
    return this.props.whatsapp;
  }

  public static createUser({
    name,
    cpf,
    whatsapp,
    created_at,
    updated_at,
  }: IUserProps): User {
    const userProps = {
      name,
      cpf,
      whatsapp,
      created_at,
      updated_at,
    };

    return AggregateRoot.create({ props: userProps }, User);
  }
}

export { User };
