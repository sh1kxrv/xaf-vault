import { OpCode } from '~/builder/opcodes'
import { Instruction } from '~/builder/instruction'
export class AscCondition extends Instruction {
  constructor() {
    super(null, OpCode.ASC)
  }
  override transcript(): string {
    return 'ASC'
  }
}
