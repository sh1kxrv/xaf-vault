import { SQLBuilderAPI } from '~/api/sql-builder'
import { Instruction } from './instruction'
import {
  SelectInstruction,
  ColumnsInstruction,
  FromInstruction,
  ValuesInstruction,
  OrderCondition,
  AscCondition,
  DescCondition,
  BracketWrapper,
  WhereCondition,
  InsertInstruction,
} from './instructions'
import { OpCode } from './opcodes'
/*

 ROOT_INSTRUCTION
   ( (- SELECT
     - OPERAND ) -> ( FROM
                      - OPERAND ) )

* EXECUTE ROOT INSTRUCTION
* -> SELECT <OPERAND> FROM <OPERAND>
*/
export class SQLBuilder implements SQLBuilderAPI {
  private _instructions: Instruction[] = []
  public select(table_name: string, columns: string[]): SQLBuilderAPI {
    const select_instruction = new SelectInstruction(
      new ColumnsInstruction(columns),
    )
    const from_instruction = new FromInstruction(table_name)
    this._instructions.push(select_instruction, from_instruction)
    return this
  }
  public order_by(
    condition: string,
    sort_type: 'asc' | 'desc' = 'asc',
  ): SQLBuilderAPI {
    this._instructions.push(
      new OrderCondition(condition),
      sort_type === 'asc' ? new AscCondition() : new DescCondition(),
    )
    return this
  }
  public insert(table_name: string, columns: string[]): SQLBuilderAPI {
    this._instructions.push(
      new InsertInstruction(table_name),
      new BracketWrapper(new ColumnsInstruction(columns)),
    )
    return this
  }
  public values(values: object): SQLBuilderAPI {
    const values_instruction = new ValuesInstruction(values)
    this._instructions.push(values_instruction)
    return this
  }
  public update(table_name: string): SQLBuilderAPI {
    return this
  }
  public set(column: string, value: unknown): SQLBuilderAPI {
    return this
  }
  public delete(table_name: string): SQLBuilderAPI {
    return this
  }
  public where(condition: string): SQLBuilderAPI {
    this._instructions.push(new WhereCondition(condition))
    return this
  }
  public query(builder: SQLBuilderAPI): SQLBuilderAPI {
    return this
  }
  // debug method
  public display_instructions_tree(): string {
    return ''
  }
  private get opcodes() {
    return this._instructions.map((instr) => instr.opcode)
  }
  public validate(): boolean {
    const twice_checker = (opcode: OpCode) =>
      this.opcodes.filter((op) => op === opcode).length <= 1
    const twice_where = twice_checker(OpCode.WHERE)
    return twice_where
  }
  public build(): string {
    const validation = this.validate()
    if (!validation) {
      throw new Error(
        `Invalid query: ${this.opcodes.map((o) => OpCode[o]).join(' -> ')}`,
      )
    }
    const transcripted = this._instructions.map((instr) => instr.transcript())
    return `${transcripted.join(' ')};`
  }
}
