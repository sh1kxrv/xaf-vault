import { Command } from '~/api/commands.api'
import { NotImplementedError } from '@vault/core'

export class TouchIDCommand implements Command {
  name = 'touch'
  shortcut = ''
  execute(...args: unknown[]): void {
    throw new NotImplementedError()
  }
}
