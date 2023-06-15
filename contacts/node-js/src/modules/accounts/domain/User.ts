import { AggregateRoot } from '@shared/core/domain/AggregateRoot';
import { UniqueEntityID } from '@shared/core/domain/UniqueEntityID';

interface IProps {
  name: string;
  cpf: string;
  whatsapp: string;
}

class User extends AggregateRoot<IProps> {
  constructor(props: IProps, id?: UniqueEntityID) {
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
}

export { User };
