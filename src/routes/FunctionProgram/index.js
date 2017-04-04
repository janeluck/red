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

const lyricSegment = (n) => {
  return _.chain([])
    .push(n + 'bottles of beer on the wall')
    .push(n + 'bottles of beer')
    .push('Take one down, pass it around')
    .tap(lyrics => {
      if (n > 1)
        lyrics.push((n - 1) + 'bottles of beer on the wall')
      else
        lyrics.push('No more bottles of beer on the wall')
    })
}

// 鬼畜歌词生成器^_^
const song = (start, end, lyricGen) => {
  return _.reduce(_.range(start, end, -1), function (acc, n) {
      return acc.concat(lyricGen(n))
    }, []
  )
}


const str = 'name,age,hair\nMerble,35,red\nBob,64,blonde'
const FP = () => <div>
  <div>string: {str}</div>


  <div>   {lameCSV(str)}</div>
  <table>
    <tbody>

    {lameCSV(str).map((tr, i) => <tr key={i}>{tr.map((td, j) => <td key={j}>{td}</td>)}</tr>)}
    {song(99, 0, lyricSegment)}
    </tbody>
  </table>
</div>

export default FP
