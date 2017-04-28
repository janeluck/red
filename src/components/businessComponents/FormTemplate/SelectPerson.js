/**
 * Created by janeluck on 4/28/17.
 */
import React, {PropTypes} from 'react'
import {
  Button, Tag
} from  'antd'
import {SelectModal} from '../../../components/businessComponents'
export  default  class SelectPerson extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 先处理多选的情况
      isMultiple: true,
      visible: false,
      selection: [],
    }
  }

  deleteTag = (ID) => {
    const {selection} = this.state
    this.setState({
      selection: selection.filter(item => item.ID != ID)
    }, this.handleChange)
  }
  renderTag = () => {
    const {selection} = this.state
    return selection.map(tag => <Tag color="blue" onClose={this.deleteTag.bind(this, tag.ID)} closable key={tag.ID}>{tag.Name}</Tag>)


  }

  setSelection = (selection) => {
    this.setState({
      selection,
      visible: false
    }, this.handleChange)
  }

  handleChange = () => {
    const {onChange} = this.props
    const {selection} = this.state
    // 触发表单系列行为
    onChange(selection.length ? selection : undefined)
  }

  render() {

    const {visible, selection} = this.state
    const {value, onChange} = this.props
    console.dir(this.props)
    //console.log(this.props['data-__meta'])
    const that = this
    return (
      <div>
        <input type="hidden"/>
        {this.renderTag()}
        <Button onClick={()=> {
          that.setState({
            visible: true
          })
        }}>选择人员</Button>
        {visible ? <SelectModal
          onOk={
            that.setSelection
          }
          value={selection}
          onCancel={()=> {
            that.setState({
              visible: false
            })
          }}/> : null}

      </div>

    )
  }
}
