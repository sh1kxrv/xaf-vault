import { OpCode } from '../opcodes'
import { Instruction } from './../instruction'
export class ColumnsInstruction extends Instruction {
  constructor(override operand: string[]) {
    super(operand, OpCode.COLUMNS)
  }
  override transcript(): string {
    return this.operand.join(', ')
  }
}
