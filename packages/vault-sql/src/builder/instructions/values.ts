import { OpCode } from '~/builder/opcodes'
import { Instruction } from '~/builder/instruction'

function cast(value: unknown): string {
  switch (typeof value) {
    case 'string':
      return `'${value}'`
    case 'number':
      return value.toString()
    case 'boolean':
      return value ? '1' : '0'
    case 'object': {
      if (value === null) {
        return 'NULL'
      }
      return `'${JSON.stringify(value)}'`
    }
    case 'undefined':
      return 'NULL'
    default:
      throw new Error(`Cannot cast value ${value as string} to string`)
  }
}

export class ValuesInstruction extends Instruction {
  constructor(override operand: object) {
    super(operand, OpCode.VALUES)
  }
  override transcript(): string {
    const values = Object.values(this.operand).map(cast)
    return `VALUES (${values.join(', ')})`
  }
}
