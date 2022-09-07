import { OpCode } from '~/builder/opcodes'
import { Instruction } from '~/builder/instruction'
export class OffsetCondition extends Instruction {
  constructor(override operand: number) {
    super(operand, OpCode.OFFSET)
  }
  override transcript(): string {
    return `OFFSET ${this.operand}`
  }
}
