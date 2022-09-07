import { OpCode } from '~/builder/opcodes'
import { Instruction } from '~/builder/instruction'
export class BracketWrapper extends Instruction {
  constructor(override operand: Instruction) {
    super(operand, OpCode.BRACKET_WRAPPER)
  }
  override transcript(): string {
    return `(${this.operand.transcript()})`
  }
}
