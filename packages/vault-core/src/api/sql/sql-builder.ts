import { OpCode } from '~/sql/builder/opcodes'
export interface InstructionAPI {
  operand: unknown
  opcode: OpCode
}

export interface SQLBuilderAPI {
  select(table_name: string, columns: string[]): SQLBuilderAPI
  insert(table_name: string, columns: string[]): SQLBuilderAPI
  update(table_name: string): SQLBuilderAPI
  delete(table_name: string): SQLBuilderAPI
  where(condition: string): SQLBuilderAPI

  query(builder: SQLBuilderAPI): SQLBuilderAPI

  set(column: string, value: unknown): SQLBuilderAPI
}
