export abstract class CrudRepository<T, I> {
  abstract getAll(): Promise<T[]>;
  abstract getOne(id: I): Promise<T>;
  abstract delete(id: I): Promise<void>;
  abstract create(data: T): Promise<void>;
  abstract update(data: T): Promise<void>;
}
