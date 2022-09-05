import { OpCode } from '~/builder/opcodes'
export class UnknownOpCodeError extends Error {
  constructor(opCode: OpCode) {
    super(`Unknown opcode - ${opCode.toString()}`)
  }
}
