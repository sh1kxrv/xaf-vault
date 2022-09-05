import { OpCode } from '../opcodes'
import { Instruction } from './../instruction'
export class DynamicInstruction extends Instruction {
  constructor(override operand: Instruction[]) {
    super(operand, OpCode.FROM)
  }
  override transcript(): string {
    return this.operand.map((instr) => instr.transcript()).join(' ')
  }
}
