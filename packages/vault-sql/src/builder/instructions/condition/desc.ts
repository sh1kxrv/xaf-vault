import { OpCode } from '~/builder/opcodes'
import { Instruction } from '~/builder/instruction'
export class DescCondition extends Instruction {
  constructor() {
    super(null, OpCode.DESC)
  }
  override transcript(): string {
    return 'DESC'
  }
}
