/**
 * Created by janeluck on 17/6/6.
 */
import React from 'react'
import _ from 'lodash'
import Immutable from 'immutable'
import style from './index.less'
import classNames from 'classnames';
import {Spin} from 'antd'

//todo: 每条数据id
const oData = [
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
  }, {
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
      $$data: Immutable.fromJS(oData),
      loading: false
    }
  }

  // 选择或者重置超客对应到U订货的数据
  setCorrelated = (rowIndex, uIndex, prevState) => {

    const toggleCorrelated = (()=> {
      const $$data = this.state.$$data
      this.setState({
        // 切换该条数据对应状态
        $$data: $$data.updateIn([rowIndex, 'U', uIndex, 'IsCorrelated'], v => v ^ 1),
        loading: false
      })
    }).bind(this)


    if (prevState == '0') {
      //todo: ajax true then
      new Promise((resolve, reject)=> {
        this.setState({
          loading: true
        })
        setTimeout(resolve, 1000)
      }).then(toggleCorrelated)


    } else {
      toggleCorrelated()
    }


  }

  // 保存超客对应到U订货的已选择条目
  saveCorrelated = () => {

  }

  renderRow = (row, rowIndex) => {


    // 容错处理
    const u = _.isArray(row.U) && row.U || []

    const rowSpan = u.length


    if (rowSpan == 1) {
      // 超客信息导入U订货: 一对一, 一对无则自动生成一条
      const utdCls = classNames({
        // 一对无, 标记出自动生成的信息
        [style.autoCorrelated]: row.AutoCorrelated == '1'
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
      // 一对多

      // 是否还未对应
      const isUnCorrelating = _.every(u, item => item.IsCorrelated == '0')
      if (isUnCorrelating) {


        return _.map(u, (item, index) => {

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
              <td  >
                {u[0].Name}
              </td>
              <td >
                {u[0].Phone}
              </td>
              <td >
                {u[0].Mail}
              </td>
              <td>
                <a href="javascript:;"
                   onClick={this.setCorrelated.bind(this, rowIndex, index, item.IsCorrelated)}>请选择</a>
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
              <a href="javascript:;" onClick={this.setCorrelated.bind(this, rowIndex, index, item.IsCorrelated)}>请选择</a>
            </td>
          </tr>)

        })
      } else {
        return _.map(u, (item, index) => {

          // 未被选中的置灰显示
          const tdCls = classNames({
            [style.selectDisabled]: item.IsCorrelated == '0'
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
              <td className={tdCls}>
                {u[0].Name}
              </td>
              <td className={tdCls}>
                {u[0].Phone}
              </td>
              <td className={tdCls}>
                {u[0].Mail}
              </td>
              <td>
                {item.IsCorrelated == '0' ? '' : (
                  <a href="javascript:;" onClick={this.setCorrelated.bind(this, rowIndex, index, item.IsCorrelated)}>重新选择</a>)}
              </td>
            </tr>)
          }

          return (<tr key={`${rowIndex}-${index}`}>

            <td className={tdCls}>
              {u[index].Name}
            </td>
            <td className={tdCls}>
              {u[index].Phone}
            </td>
            <td className={tdCls}>
              {u[index].Mail}
            </td>
            <td>
              {item.IsCorrelated == '0' ? '' : (<a href="javascript:;"
                                                   onClick={this.setCorrelated.bind(this, rowIndex, index, item.IsCorrelated)}>重新选择</a>)}
            </td>
          </tr>)

        })

      }


    }


  }

  render() {

    const {$$data, loading} = this.state
    const data = $$data.toJS()
    return (
      <div style={{padding: '30px'}}>

        <div>


          <Spin tip="加载中..." spinning={loading}>
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
              </tbody>
            </table>
          </Spin>

        </div>
      </div>
    )
  }
}
export default MappingTablePage
