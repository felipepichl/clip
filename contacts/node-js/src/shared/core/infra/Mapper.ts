class Mapper<T> {
  static toPersistence<U>(object: U): T {
    throw new Error("Method 'toPersistence' not implemented");
  }

  static toDomain<U>(raw: U): T {
    throw new Error("Method 'toDomain' not implemented");
  }
}

export { Mapper };
