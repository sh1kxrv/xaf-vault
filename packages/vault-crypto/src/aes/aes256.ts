import crypto from 'crypto'

export function encrypt(data: string, key: string, iv: string): string {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)
  const encrypted = cipher.update(data, 'utf8', 'hex')
  return encrypted + cipher.final('hex')
}

export function decrypt(data: string, key: string, iv: string): string {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
  const decrypted = decipher.update(data, 'hex', 'utf8')
  return decrypted + decipher.final('utf8')
}
