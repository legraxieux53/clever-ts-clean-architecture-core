export interface UseCase<C, T, X> {
  execute(command: C, context?: X): Promise<T>;
}
