/**
 * Created by janeluck on 4/28/17.
 */
import React, {PropTypes} from 'react'
import {
  Button, Tag
} from  'antd'
import {SelectModal} from '../../../components/businessComponents'
import _ from 'lodash'
export  default  class SelectPerson extends React.Component {
  constructor(props) {
    super(props)
    const selection = this.props.value || [];
    this.state = {
      // 先处理多选的情况
      isMultiple: true,
      visible: false,
      selection
    }
  }

  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    console.log('nextProps:')
    console.log(nextProps)
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState({
        selection: value
      });

    }
  }

  deleteTag = (ID) => {
    const {selection} = this.state
    const newSelection = selection.filter(item => item.ID != ID)
    this.setState({
      selection: newSelection
    }, this.handleChange.bind(this, newSelection))
  }
  renderTag = () => {
    const {selection} = this.state
    return _.isArray(selection) && selection.map(tag => <Tag color="blue" onClose={this.deleteTag.bind(this, tag.ID)} closable
                                     key={tag.ID}>{tag.Name}</Tag>)


  }

  setSelection = (selection) => {
    this.setState({
      selection,
      visible: false
    }, this.handleChange.bind(this, selection))
  }

  handleChange = (changedValue) => {
    const {onChange} = this.props
    // 触发表单系列行为
    onChange(changedValue.length ? changedValue : undefined)
  }

  render() {

    const {visible, selection} = this.state
    const {value, onChange} = this.props
    console.dir(this.props)
    //console.log(this.props['data-__meta'])
    const that = this
    return (
      <div {...this.props}>
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
