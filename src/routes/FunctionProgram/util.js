/**
 * Created by janeluck on 17/6/23.
 * underscore的isEqual源码分析
 * todo: 1. 加入es6类型 2. _.wrapped
 *
 * + 把字符串转为数字
 */
import _ from 'lodash'
var toString = Object.prototype.toString

var isEqual = function (a, b, aStack, bStack) {
  //原始类型Number, String, Boolean

  // 0 === -0 使用 1 / 0 !== 1/ -0 排除

  if (a === b) return a !== 0 || 1 / a === 1 / b

  // null == undefined  返回true
  // null === undefined 返回false
  if (a == null || b == null) return a === b


  // isNaN !== isNaN 返回true
  if (a !== a) return b !== b

  var className = toString.call(a)
  if (className !== toString.call(b)) return false
  switch (className) {

    case '[object RegExp]':
    case '[object String]':
      return '' + a === '' + b

    case '[object Number]':
      if (+a !== +a) return +b !== +b
      return +a === 0 ? 1 / +a === 1 / b : +a === +b
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b
    // todo case '[object Symbol]'
  }

  // 判断a 是否为数组
  var areArrays = className === '[object Array]'
  if (!areArrays) {
    if (typeof a !== 'object' || typeof b !== 'object') return false

    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    // 通过构造函数来判断 a 和 b 是否相同

    var aCtor = a.constructor, bCtor = b.constructor
    if (aCtor !== bCtor) return false

  }


  aStack = aStack || []
  bStack = bStack || []

  while (length--) {
    // 避免循环引用类型导致的死循环
    if (aStack[length] === a) return bStack[length] === b
  }

  aStack.push(a)
  bStack.push(b)


  if (areArrays) {
    length = a.length
    if (length !== b.length) return false


    while (length--) {
      if (!isEqual(a[length], b[length], aStack, bStack)) return false
    }


  } else {
    var keys = _.keys(a), key
    length = keys.length
    if (_.keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      // 递归比较
      key = keys[length];
      if (!(_.has(b, key) && isEqual(a[key], b[key], aStack, bStack))) return false;
    }

  }

  aStack.pop()
  bStack.pop()
  return true


}


export {
  isEqual
}
