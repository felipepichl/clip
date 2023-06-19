abstract class Mapper<T, U> {
  abstract toPersistence(object: T): T;
  abstract toDomain(raw: U): T;
}

export { Mapper };
