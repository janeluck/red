/**
 * Created by janeluck on 3/31/17.
 */
import React, {PropTypes} from 'react'
import {Modal, Input, Button, Tree, Checkbox} from 'antd'
import Immutable from 'immutable'
import reqwest from 'reqwest'


const TreeNode = Tree.TreeNode
const generatorTree = (data) => {
  if (data.Children && data.Children.length != 0) {
    return <TreeNode key={data.ID} title={data.Name}>
      {data.Children.map(generatorTree)}
    </TreeNode>
  }
  return <TreeNode key={data.ID} title={data.Name}/>
}

class SelectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      loading: false,
      selectedDeptID: '',
      deptTree: {
        Name: '',
        ID: 0
      },
      users: [],
      keyword: '',
      selectedKeys: []
    }
  }

  componentWillMount() {
    this.getDeptTree()
  }

  getDeptTree = () => {
    const that = this
    reqwest({
      url: location.origin + '/api/deptTree',
      type: 'json'
    }).then(data=> {
      that.setState({
        deptTree: data.data
      })
    })
  }

  getList = (id) => {
    const that = this
    reqwest({
      url: location.origin + '/api/personList',
      type: 'json'
    }).then(data=> {
      that.setState({
        users: data.data
      })
    })
  }


  onSelect = (selectedKeys, e) => {
    //selected: bool, selectedNodes, node, event
    const id = e.node.props.eventKey
    this.getList(id)

  }

  render() {


    const {deptTree, users} = this.state
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

            {/*--搜索栏--*/}
            <div>
              <span>搜索人员:</span>
              <Input style={{width: 200}}/>
              <Button type="primary">搜索</Button>

            </div>
            {/*--搜索栏--*/}


            {/*--已选择--*/}
            <div>
              <div>已选择</div>
              <div>

              </div>

            </div>
            {/*--已选择--*/}


            {/*--部门人员双栏--*/}

            <div>
              <div>
                <div>部门</div>
                <div>

                  <Tree
                    onSelect={this.onSelect}

                  >
                    {generatorTree(deptTree)}
                  </Tree>


                </div>

              </div>

              <div>
                <div>人员</div>

                <div>

                    <ul>
                      {users.map(user=><li key={user.ID}>
                        <Checkbox />

                        {user.Name}


                        </li>)}

                    </ul>


                </div>
              </div>


            </div>
            {/*--部门人员双栏--*/}


            <div>


            </div>


          </div>
        </Modal>
      </div>
    );
  }
}


/*
 SelectModal.propTypes = {
 onMenuClick: PropTypes.func,
 menuOptions: PropTypes.array.isRequired,
 buttonStyle: PropTypes.object,
 dropdownProps: PropTypes.object,
 }
 */

export default SelectModal
