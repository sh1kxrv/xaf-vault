import { EchoCommand, TouchIDCommand, TransferCommand } from '~/commands'

export class CommandHandler {
  private _commands = [
    new EchoCommand(),
    new TouchIDCommand(),
    new TransferCommand(),
  ]
  public async handle(raw_command: string): Promise<void> {
    const [command_name, ...args] = raw_command.split(' ')
    const command = this._commands.find(
      (command) =>
        command.name === command_name || command.shortcut === command_name,
    )
    if (command) {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      await command.execute(...args)
    }
  }
}
