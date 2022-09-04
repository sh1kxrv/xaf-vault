import { Command } from '~/api/commands.api'
import { NotImplementedError } from '~/exceptions/not-implemented'

export class TransferCommand implements Command {
  name = 'transfer'
  shortcut = 'te'
  execute(...args: unknown[]): void {
    throw new NotImplementedError()
  }
}
