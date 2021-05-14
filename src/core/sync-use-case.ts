export interface SyncUseCase<C, T, X> {
  execute(command: C, context?: X): T;
}
