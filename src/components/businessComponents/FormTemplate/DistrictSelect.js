/**
 * Created by janeluck on 5/3/17.
 */
import React, {PropTypes} from 'react'
import {Cascader, Spin} from 'antd';
import reqwest from 'reqwest'
import _ from 'lodash'


export  default  class DistrictSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    // 判断localStorage是否已经存有'行政区域'数据
    // 放在表单动态渲染时,最好还是由form层取数据
    const that = this
    if (top.window.localStorage['antdAdminRegion']) {
      that.region = JSON.parse(top.window.localStorage['antdAdminRegion'])

      that.setState({
        loading: false,
        value: []
      })
    } else {

      reqwest({
        url: location.origin + '/api/region',
        type: 'json'
      }).then(data=> {
         // '行政区域'数据存储到localStorage
        top.window.localStorage.setItem('antdAdminRegion', JSON.stringify(data.data))
        that.region = data.data
        that.setState({
          loading: false
        })
      })
    }

  }

  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState({
        value
      });
    }
  }
  onChange = (value) => {
    this.setState({
      value
    }, this.handleChange.bind(this, value))
  }
  handleChange = (changedValue) => {
    const {onChange} = this.props
    // 触发表单系列行为
    onChange(_.isArray(changedValue) ? changedValue : undefined)
  }

  render() {
    const {loading, value} = this.state
    return loading ? <Spin /> : <Cascader options={this.region} value={value} onChange={this.onChange} changeOnSelect/>
  }

}
