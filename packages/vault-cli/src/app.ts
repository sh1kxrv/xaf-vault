import { red } from 'kolorist'
import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'process'
import { success } from './terminal'
async function app() {
  const rl = readline.createInterface({ input, output })
  const ask = (query: string) =>
    new Promise((resolve) => rl.question(query, resolve))
  for (;;) {
    const raw_command = (await ask(red('>'))) as string
    success(`Command received: ${raw_command}`)
    if (raw_command === 'exit') break
  }
  rl.close()
}
void app()
