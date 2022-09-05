import { OpCode } from '../opcodes'
import { Instruction } from './../instruction'
export class FromInstruction extends Instruction {
  constructor(override operand: string) {
    super(operand, OpCode.FROM)
  }
  override transcript(): string {
    return `FROM ${this.operand}`
  }
}
