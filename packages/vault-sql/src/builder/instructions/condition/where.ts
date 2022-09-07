import { OpCode } from '~/builder/opcodes'
import { Instruction } from '~/builder/instruction'
export class WhereCondition extends Instruction {
  constructor(override operand: string) {
    super(operand, OpCode.WHERE)
  }
  override transcript(): string {
    return `WHERE ${this.operand}`
  }
}
