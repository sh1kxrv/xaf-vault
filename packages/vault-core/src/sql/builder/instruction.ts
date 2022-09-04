import { OpCode } from './opcodes'

export class Instruction {
  operand: unknown = {}
  opcode: OpCode = OpCode.UNKNOWN
  constructor(operand: unknown, opcode: OpCode) {
    this.operand = operand
    this.opcode = opcode
  }
}
