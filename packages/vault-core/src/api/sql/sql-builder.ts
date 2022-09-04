import { Instruction } from '~/sql/builder/instruction'
import { OpCode } from '~/sql/builder/opcodes'
export interface InstructionAPI {
  operand: unknown
  opcode: OpCode
}

export interface SQLBuilderAPI {
  _instructions: Instruction[]
  select(table_name: string, columns: string[]): SQLBuilderAPI
  insert(table_name: string, columns: string[]): SQLBuilderAPI
  update(table_name: string): SQLBuilderAPI
  delete(table_name: string): SQLBuilderAPI
  where(column: string, condition: string): SQLBuilderAPI
  value(value: object): SQLBuilderAPI
}
