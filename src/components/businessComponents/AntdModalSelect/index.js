/**
 * Created by janeluck on 3/31/17.
 */
import React, {PropTypes} from 'react'
import {Modal, Input, Button, Tree, Checkbox, Spin} from 'antd'
import Immutable from 'immutable'


const TreeNode = Tree.TreeNode
const generatorTree = (data) => {
  if (data.Children && data.Children.length != 0) {
    return <TreeNode key={data.ID} title={data.Name}>
      {data.Children.map(generatorTree)}
    </TreeNode>
  }
  return <TreeNode key={data.ID} title={data.Name}/>
}

class AntModalSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      deptTree: {
        Name: '',
        ID: 0
      },
      users: [],
      keyword: '',
      $$checkedList: Immutable.Map(),
    }
  }

  componentWillMount() {
    this.getDeptTree()
  }



  onOk = () => {
    const {$$checkedList} = this.state
    const {multiple} = this.props

    this.props.onOk && this.props.onOk(multiple ? [...$$checkedList.values()] : $$checkedList.first())

  }
  onCancel = () => {
    this.props.onCancel && this.props.onCancel()
  }

  render() {




    return (
      <div>

        <Modal
          title={"选择人员"}
          visible={true}
          onOk={this.onOk}
          maskClosable={false}
          onCancel={this.onClose}
        >


          <div>

          </div>


        </Modal>
      </div>
    );
  }
}


AntModalSelect.propTypes = {
  multiple: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  /* menuOptions: PropTypes.array.isRequired,
   buttonStyle: PropTypes.object,
   dropdownProps: PropTypes.object,*/
}


AntModalSelect.defaultProps = {
  multiple: true
};


export default AntModalSelect
