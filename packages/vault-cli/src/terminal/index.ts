function emoji_message(message: string, emoji: string, postfix: string = '⇝') {
  console.log(`[${emoji}] ${postfix} ${message}`)
}
export function debug(message: any) {
  emoji_message(message, '🐛')
}
