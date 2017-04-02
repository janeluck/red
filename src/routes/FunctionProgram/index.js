/**
 * Created by jane on 02/04/2017.
 */
import React from 'react'
import {Icon} from 'antd'
import _ from 'lodash'

const lameCSV = (str) => {
  return _.reduce(str.split('\n'), function (table, row) {
    table.push(_.map(row.split(','), function (c) {
      return c.trim()
    }))
    return table
  }, [])
}
const str = 'name,age,hair\nMerble,35,red\nBob,64,blonde'
const FP = () => <div>
  <div>string: {str}</div>


  <div>   {lameCSV(str)}</div>
  <table>
    <tbody>

    {lameCSV(str).map((tr, i) => <tr key={i}>{tr.map((td, j) => <td key={j}>{td}</td>)}</tr>)}

    </tbody>
  </table>
</div>

export default FP
