export interface SQLBuilderAPI {
  _instructions: string[]
  _builded: string
  select(table_name: string, columns: string[]): SQLBuilderAPI
  insert(table_name: string, columns: string[]): SQLBuilderAPI
  update(table_name: string): SQLBuilderAPI
  delete(table_name: string): SQLBuilderAPI
  where(column: string, condition: string): SQLBuilderAPI
}
