import { OpCode } from '../opcodes'
import { Instruction } from './../instruction'
export class InsertInstruction extends Instruction {
  constructor(override operand: string) {
    super(operand, OpCode.INSERT)
  }
  override transcript(): string {
    return `INSERT INTO ${this.operand}`
  }
}
