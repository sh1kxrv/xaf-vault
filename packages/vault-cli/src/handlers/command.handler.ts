import { EchoCommand } from '~/commands/command.echo'

export class CommandHandler {
  private _commands = [new EchoCommand()]
  public async handle(raw_command: string): Promise<void> {
    const [command_name, ...args] = raw_command.split(' ')
    const command = this._commands.find(
      (command) =>
        command.name === command_name || command.shortcut === command_name,
    )
    if (command) {
      await command.execute(...args)
    }
  }
}
