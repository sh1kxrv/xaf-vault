import { SQLBuilder } from '..'

describe('SQL Query Builder | Tests', () => {
  test('Query | SELECT', () => {
    const select_query = new SQLBuilder()
    select_query.select('profiles', ['id', 'name', 'age'])
    const builded = select_query.build()
    expect(builded).toBe('SELECT id, name, age FROM profiles;')
  })
  test('Query | SELECT | ORDER BY', () => {
    const select_query = new SQLBuilder()
    select_query.select('profiles', ['id', 'name', 'age']).order_by('id', 'asc')
    const builded = select_query.build()
    expect(builded).toBe('SELECT id, name, age FROM profiles ORDER BY id ASC;')
  })
  test('Query | SELECT | WHERE + ORDER_BY', () => {
    const select_query = new SQLBuilder()
    select_query
      .select('profiles', ['id', 'name', 'age'])
      .where('id = 1')
      .order_by('id', 'asc')
    const builded = select_query.build()
    expect(builded).toBe(
      'SELECT id, name, age FROM profiles WHERE id = 1 ORDER BY id ASC;',
    )
  })
  test('Query | INSERT', () => {
    const insert_query = new SQLBuilder()
    insert_query
      .insert('profiles', ['name', 'age'])
      .values({ name: 'John', age: 20 })
    const builded = insert_query.build()
    expect(builded).toBe(
      "INSERT INTO profiles (name, age) VALUES ('John', 20);",
    )
  })
  test('Query | UPDATE', () => {})
  test('Query | DELETE', () => {})
})
