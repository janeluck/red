/**
 * Created by janeluck on 17/6/6.
 */
import React from 'react'
import _ from 'lodash'
class MappingTablePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div style={{padding: '30px'}}>
        <table>
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
            </td><td>
              13512345678
            </td><td>
              wang001@qq.com
            </td>
            <td>重新选择</td>
          </tr>
         <tr>
            <td>
              wang002
            </td><td>
              13512345677
            </td><td>
              wang002@qq.com
            </td>
           <td></td>
         </tr><tr>
            <td>
              wang003
            </td><td>
              13512345671
            </td><td>
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
