import { OpCode } from '../opcodes'
import { Instruction } from './../instruction'
export class SelectInstruction extends Instruction {
  constructor(override operand: Instruction) {
    super(operand, OpCode.SELECT)
  }
  override transcript(): string {
    const transcripted_operand = this.operand.transcript()
    return `SELECT ${transcripted_operand}`
  }
}
