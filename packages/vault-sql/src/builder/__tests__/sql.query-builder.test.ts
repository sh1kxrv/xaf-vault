import { SQLBuilder } from '..'

describe('SQL Query Builder | Tests', () => {
  test('Query | SELECT', () => {
    const select_query = new SQLBuilder()
    select_query.select('profiles', ['id', 'name', 'age'])
    const builded = select_query.build()
    expect(builded).toBe('SELECT id, name, age FROM profiles')
  })
  test('Query | INSERT', () => {})
  test('Query | UPDATE', () => {})
  test('Query | DELETE', () => {})
})
