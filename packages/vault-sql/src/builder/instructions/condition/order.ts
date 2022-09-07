import { OpCode } from '~/builder/opcodes'
import { Instruction } from '~/builder/instruction'
export class OrderCondition extends Instruction {
  constructor(override operand: string) {
    super(operand, OpCode.ORDER)
  }
  override transcript(): string {
    return `ORDER BY ${this.operand}`
  }
}
