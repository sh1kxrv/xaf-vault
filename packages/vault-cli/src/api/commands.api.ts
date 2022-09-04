export interface Command {
  name: string
  shortcut: string
  execute(...args: unknown[]): Promise<void> | void
}
