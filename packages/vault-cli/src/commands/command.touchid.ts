import { Command } from '~/api/commands.api'
import { NotImplementedError } from '~/exceptions/not-implemented'

export class TouchIDCommand implements Command {
  name = 'touch'
  shortcut = ''
  execute(...args: unknown[]): void {
    throw new NotImplementedError()
  }
}
