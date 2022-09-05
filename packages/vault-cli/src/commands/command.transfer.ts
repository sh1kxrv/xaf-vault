import { NotImplementedError } from '@vault/core'
import { Command } from '~/api/commands.api'

export class TransferCommand implements Command {
  name = 'transfer'
  shortcut = 'te'
  execute(...args: unknown[]): void {
    throw new NotImplementedError()
  }
}
