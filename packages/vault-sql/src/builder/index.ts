import { SQLBuilderAPI } from '~/api/sql-builder'
import { Instruction } from './instruction'
import {
  SelectInstruction,
  ColumnsInstruction,
  FromInstruction,
} from './instructions'
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
  select(table_name: string, columns: string[]): SQLBuilderAPI {
    const select_instruction = new SelectInstruction(
      new ColumnsInstruction(columns),
    )
    const from_instruction = new FromInstruction(table_name)
    this._instructions.push(select_instruction, from_instruction)
    return this
  }
  insert(table_name: string): SQLBuilderAPI {
    return this
  }
  update(table_name: string): SQLBuilderAPI {
    return this
  }
  set(column: string, value: unknown): SQLBuilderAPI {
    return this
  }
  delete(table_name: string): SQLBuilderAPI {
    return this
  }
  where(condition: string): SQLBuilderAPI {
    return this
  }
  query(builder: SQLBuilderAPI): SQLBuilderAPI {
    return this
  }
  // debug method
  display_instructions_tree(): string {
    return ''
  }
  public build(): string {
    const transcripted = this._instructions.map((instr) => instr.transcript())
    return transcripted.join(' ')
  }
}
