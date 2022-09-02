import { blue, gray, green, lightRed, red } from 'kolorist'

function emoji_message(message: string, emoji: string, postfix = '⇝') {
  console.log(`[${emoji}] ${gray(postfix)} ${message}`)
}

export function debug(message: string) {
  emoji_message(gray(message), '🐛')
}

export function info(message: string): void {
  emoji_message(blue(message), '💡')
}

export function success(message: string) {
  emoji_message(green(message), '🔥')
}

export function error(message: string) {
  emoji_message(lightRed(message), '🤡')
}
