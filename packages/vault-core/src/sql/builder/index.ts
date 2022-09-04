import { SQLBuilderAPI } from '~/api/sql/sql-builder'
import { Instruction } from './instruction'
/*

 ROOT_INSTRUCTION
   ( (- SELECT
     - OPERAND ) -> ( FROM
                      - OPERAND ) )

* EXECUTE ROOT INSTRUCTION
* -> SELECT <OPERAND> FROM <OPERAND>
*/
export class SQLBuilder implements SQLBuilderAPI {
  _instructions: Instruction[] = []
  select(table_name: string, columns: string[]): SQLBuilderAPI {
    return this
  }
  insert(table_name: string, columns: string[]): SQLBuilderAPI {
    return this
  }
  value(value: object): SQLBuilderAPI {
    return this
  }
  update(table_name: string): SQLBuilderAPI {
    return this
  }
  delete(table_name: string): SQLBuilderAPI {
    return this
  }
  where(column: string, condition: string): SQLBuilderAPI {
    return this
  }
}
