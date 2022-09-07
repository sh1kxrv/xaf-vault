import { OpCode } from '~/builder/opcodes'
import { Instruction } from '~/builder/instruction'
export class LimitCondition extends Instruction {
  constructor(override operand: number) {
    super(operand, OpCode.LIMIT)
  }
  override transcript(): string {
    return `LIMIT ${this.operand}`
  }
}
