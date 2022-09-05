import { OpCode } from '~/sql/builder/opcodes'
export class UnknownOpCodeError extends Error {
  constructor(opCode: OpCode) {
    super(`Unknown opcode - ${opCode.toString()}`)
  }
}
