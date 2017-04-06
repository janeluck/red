/**
 * Created by jane on 02/04/2017.
 */
import React from 'react'
import {Icon} from 'antd'
import _ from 'lodash'

const str = 'name,age,hair\nMerble,35,red\nBob,64,blonde'


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


const anyOf = () => {
  return _.reduceRight(arguments, function (truth, f) {
    return truth || f()
  }, false)
}

const allOf = () => {
  return _.reduceRight(arguments, function (truth, f) {
    return truth && f()
  }, true)
}

function T() {
  return true
}
function F() {
  return false
}


// todo: lodash中的谓词函数

// 反转谓词
const complement = function (pred) {
  return function () {
    return !pred.apply(null, _.toArray(arguments))
  }
}


//[anyOf(T, F), allOf(T, F), anyOf(F, F), anyOf(T, T)]

const FP = () => <div>
  <div>string: {str}</div>

  <table>
    <tbody>

    {lameCSV(str).map((tr, i) => <tr key={i}>{tr.map((td, j) => <td key={j}>{td}</td>)}</tr>)}

    </tbody>
  </table>

  <div>   {lameCSV(str)}</div>
  {song(99, 0, lyricSegment)}
  <div>
    {_.map({a: 1, b: 2}, _.identity)}
    {}
    {_.filter(['a', 'b', 1, 3, 'c'], complement(_.isNumber))}
  </div>
</div>

export default FP
