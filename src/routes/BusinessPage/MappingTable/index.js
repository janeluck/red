/**
 * Created by janeluck on 17/6/6.
 */
import React from 'react'
import _ from 'lodash'
import Immutable from 'immutable'
import style from './index.less'
import classNames from 'classnames';

const data = [
  {
    Name: 'alex',
    Phone: '13512345678',
    Mail: 'alex@qq.com',
    U: [{
      Name: 'alex',
      Phone: '13512345678',
      Mail: 'alex@qq.com',
      IsCorelated: 1
    }],
    AutoCorelated: 0
  },
  {
    Name: 'lucy',
    Phone: '13612345678',
    Mail: 'lucy@qq.com',
    U: [{
      Name: 'lucy',
      Phone: '13512345678',
      Mail: 'lucy@qq.com',
      IsCorelated: 1
    }, {
      Name: 'lucy002',
      Phone: '13522345678',
      Mail: 'lucy002@qq.com',
      IsCorelated: 0
    }, {
      Name: 'lucy003',
      Phone: '13532345678',
      Mail: 'lucy003@qq.com',
      IsCorelated: 0
    },],
    AutoCorelated: 0
  },
  {
    Name: 'tom',
    Phone: '13812345678',
    Mail: 'alex@qq.com',
    U: [{
      Name: 'tom',
      Phone: '13812345678',
      Mail: 'tom@qq.com',
      IsCorelated: 1
    }],
    AutoCorelated: 1
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
        [style.autoCorelated]: row.AutoCorelated == 1
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
