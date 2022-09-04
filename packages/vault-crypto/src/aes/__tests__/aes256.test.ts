import { encrypt, decrypt } from '../aes256'
const key = '0123456789abcdef0123456789abcdef'
const iv = '0123456789abcdef'

describe('AES-256-CBC', () => {
  test('AES-256 | Encryption', () => {
    const data = 'Hello World'
    const encrypted = encrypt(data, key, iv)
    expect(encrypted).toEqual('2ebf4ab8293bcb99853fb50addf4c034')
  })
  test('AES-256 | Decryption', () => {
    const data = '2ebf4ab8293bcb99853fb50addf4c034'
    const decrypted = decrypt(data, key, iv)
    expect(decrypted).toEqual('Hello World')
  })
})
