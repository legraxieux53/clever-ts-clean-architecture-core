export abstract class CrudMultitenantRepository<T, I> {
  abstract getAll(tenantId: string): Promise<T[]>;
  abstract getOne(id: I, tenantId: string): Promise<T>;
  abstract delete(id: I, tenantId: string): Promise<void>;
  abstract create(data: T, tenantId: string): Promise<void>;
  abstract update(data: T, tenantId: string): Promise<void>;
}
