import { SQLBuilderAPI } from '~/api/sql/sql-builder'

export class SQLBuilder implements SQLBuilderAPI {
  _instructions: string[] = []
  _builded = ''
  select(table_name: string, columns: string[]): SQLBuilderAPI {
    this.instruction('SELECT')
    return this
  }
  insert(table_name: string, columns: string[]): SQLBuilderAPI {
    return this
  }
  update(table_name: string): SQLBuilderAPI {
    return this
  }
  delete(table_name: string): SQLBuilderAPI {
    return this
  }
  where(column: string, condition: string): SQLBuilderAPI {
    return this
  }
  private instruction(instruction: string) {
    this._instructions.push(`${instruction};`)
  }
}
