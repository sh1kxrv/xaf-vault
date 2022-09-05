import { NotImplementedError } from '~/exceptions/not-implemented'
import { OpCode } from './opcodes'

export abstract class Instruction {
  operand: unknown = {}
  opcode: OpCode = OpCode.UNKNOWN
  constructor(operand: unknown, opcode: OpCode) {
    this.operand = operand
    this.opcode = opcode
  }
  transcript(): string {
    throw new NotImplementedError()
  }
}
