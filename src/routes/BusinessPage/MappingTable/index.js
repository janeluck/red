/**
 * Created by janeluck on 17/6/6.
 */
import React from 'react'
import _ from 'lodash'
import Immutable from 'immutable'
import style from './index.less'
import classNames from 'classnames';

//todo: 每条数据id
const data = [
  {
    Name: 'alex',
    Phone: '13512345678',
    Mail: 'alex@qq.com',
    U: [{
      Name: 'alex',
      Phone: '13512345678',
      Mail: 'alex@qq.com',
      IsCorrelated: 1
    }],
    AutoCorrelated: 0
  },
  {
    Name: 'lucy',
    Phone: '13612345678',
    Mail: 'lucy@qq.com',
    U: [{
      Name: 'lucy',
      Phone: '13512345678',
      Mail: 'lucy@qq.com',
      IsCorrelated: 1
    }, {
      Name: 'lucy002',
      Phone: '13522345678',
      Mail: 'lucy002@qq.com',
      IsCorrelated: 0
    }, {
      Name: 'lucy003',
      Phone: '13532345678',
      Mail: 'lucy003@qq.com',
      IsCorrelated: 0
    },],
    AutoCorrelated: 0
  },{
    Name: 'rose',
    Phone: '13012345678',
    Mail: 'rose@qq.com',
    U: [{
      Name: 'rose',
      Phone: '13012349678',
      Mail: 'rose@qq.com',
      IsCorrelated: 0
    }, {
      Name: 'rose002',
      Phone: '13022341678',
      Mail: 'rose002@qq.com',
      IsCorrelated: 0
    }, {
      Name: 'rose003',
      Phone: '13032340678',
      Mail: 'rose003@qq.com',
      IsCorrelated: 0
    },],
    AutoCorrelated: 0
  },
  {
    Name: 'tom',
    Phone: '13812345678',
    Mail: 'alex@qq.com',
    U: [{
      Name: 'tom',
      Phone: '13812345678',
      Mail: 'tom@qq.com',
      IsCorrelated: 1
    }],
    AutoCorrelated: 1
  },
]


class MappingTablePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      $$data: Immutable.fromJS(data)
    }
  }

  renderRow = (row, rowIndex) => {
    const u = row.U
    const rowSpan = u.length

    // 超客信息导入U订货: 一对一, 一对无则自动生成一条
    if (rowSpan == 1) {
      const utdCls = classNames({
        // 一对无, 标记出自动生成的信息
        [style.autoCorrelated]: row.AutoCorrelated == 1
      })
      return (<tr key={`${rowIndex}-0`}>
        <td>
          {row.Name}
        </td>
        <td>
          {row.Phone}
        </td>
        <td>
          {row.Mail}
        </td>
        <td className={utdCls}>
          {u[0].Name}
        </td>
        <td className={utdCls}>
          {u[0].Phone}
        </td>
        <td className={utdCls}>
          {u[0].Mail}
        </td>
        <td>
          ok
        </td>
      </tr>)
    } else {

      // 是否还未对应
      const isUnCorrelating = _.every(u, item => item.IsCorrelated == '0')
      if (isUnCorrelating) {



        return _.map(u, (item, index) => {

          const tdCls = classNames({
                [style.selectDisabled]: !isUnCorrelating && item.IsCorrelated == '0'
              })
          if (index == 0) {
            return (<tr key={`${rowIndex}-0`}>
              <td rowSpan={rowSpan}>
                {row.Name}
              </td>
              <td rowSpan={rowSpan}>
                {row.Phone}
              </td>
              <td rowSpan={rowSpan}>
                {row.Mail}
              </td>
              <td  className={tdCls}>
                {u[0].Name}
              </td>
              <td className={tdCls}>
                {u[0].Phone}
              </td>
              <td className={tdCls}>
                {u[0].Mail}
              </td>
              <td>

              </td>
            </tr>)
          }

          return (<tr key={`${rowIndex}-${index}`}>

            <td >
              {u[index].Name}
            </td>
            <td >
              {u[index].Phone}
            </td>
            <td >
              {u[index].Mail}
            </td>
            <td>
              请选择
            </td>
          </tr>)

        })
      }else{

      }


    }

    // 一对多


  }

  render() {

    const data = this.state.$$data.toJS()
    return (
      <div style={{padding: '30px'}}>
        <table className={style.mappingTable}>
          <thead>
          <tr>
            <th colSpan="3">超客</th>
            <th colSpan="4">U订货</th>

          </tr>
          <tr>
            <th>姓名</th>
            <th>手机号</th>
            <th>邮箱</th>
            <th>姓名</th>
            <th>手机号</th>
            <th>邮箱</th>
            <th>是否对应</th>
          </tr>
          </thead>
          <tbody>

          {_.map(data, this.renderRow)}

          <tr >
            <td rowSpan="3">
              alex
            </td>

            <td rowSpan="3">
              12312345678
            </td>
            <td rowSpan="3">
              12312345678@gmail.com
            </td>
            <td>
              wang001
            </td>
            <td>
              13512345678
            </td>
            <td>
              wang001@qq.com
            </td>
            <td>重新选择</td>
          </tr>
          <tr>
            <td>
              wang002
            </td>
            <td>
              13512345677
            </td>
            <td>
              wang002@qq.com
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              wang003
            </td>
            <td>
              13512345671
            </td>
            <td>
              wang003@qq.com
            </td>
            <td></td>
          </tr>
          </tbody>
        </table>

      </div>
    )
  }
}
export default MappingTablePage
