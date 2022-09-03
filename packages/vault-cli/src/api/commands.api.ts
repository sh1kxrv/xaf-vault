export interface Command {
  name: string
  execute(...args: unknown[]): void
}
