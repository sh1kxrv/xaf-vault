import { Command } from '~/api/commands.api'

export class EchoCommand implements Command {
  name = 'echo'
  shortcut = 'eh'
  execute(...args: unknown[]): void {
    console.log('Echo >>', args.at(0))
  }
}
