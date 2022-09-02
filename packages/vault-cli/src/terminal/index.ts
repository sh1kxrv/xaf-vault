import { blue, gray, green, red } from 'kolorist'

function emoji_message(message: string, emoji: string, postfix = '⇝') {
  console.log(`[${emoji}] ${gray(postfix)} ${message}`)
}

declare function debug(message: string) {
  emoji_message(gray(message), '🐛')
}

declare function info(message: string): void {
  emoji_message(blue(message), '💡')
}

declare function success(message: string) {
  emoji_message(green(message), '🔥')
}

declare function error(message: string) {
  emoji_message(red(message), '🤡')
}

export {
  debug, info, success, error
}
