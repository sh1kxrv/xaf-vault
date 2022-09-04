import { green } from 'kolorist'
import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'process'
import { CommandHandler } from './handlers/command.handler'
async function app() {
  const rl = readline.createInterface({ input, output })
  const ask = (query: string) =>
    new Promise((resolve) => rl.question(query, resolve))
  const command_handler = new CommandHandler()
  for (;;) {
    const raw_command = (await ask(green('>'))) as string
    await command_handler.handle(raw_command)
    if (raw_command === 'exit') break
  }
  rl.close()
}
void app()
