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
      $$checkedList: Immutable.Map(),

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
      type: 'json',
      method: 'post',
      data: {
        id
      }
    }).then(data=> {
      that.setState({
        users: data.data
      })
    })
  }


  keywordChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  search = ()=> {
    const that = this
    const keyword = that.state.keyword.replace(/(^\s*)|(\s*$)/g, "")

    if (keyword == '') return
    that.setState({
      loading: true,
      selectedKeys: []
    }, ()=> {
      reqwest({
        url: location.origin + '/api/searchUser',
        type: 'json',
        method: 'post',
        data: {
          keyword
        }
      }).then(function (data) {

        if (data.rs) {
          // Immutable会把Number类型的键值转为String, 避免混淆, ID写入的时候统一转为String类型
          const users = data.data.list && data.data.list.map(user=> {
              user.ID = user.ID + ''
              return user
            })
          that.setState({
            loading: false,
            users: users
          })
        } else {
          Modal.error({
            title: '出错了',
            content: data.error
          });
        }
      })
        .fail(function (err, msg) {
          Modal.error({
            title: '出错了',
            content: '服务器错误，请联系管理员',
          });
        })
    })

  }


  onSelect = (selectedKeys, e) => {
    //selected: bool, selectedNodes, node, event
    const id = e.node.props.eventKey
    this.getList(id)

  }


  checkChange = (user, e)=> {
    const checked = e.target.checked
    const {multiple}= this.props

    const $$checkedList = this.state.$$checkedList
    this.setState({
      $$checkedList: checked ? (multiple ? $$checkedList : Immutable.Map())['set'](user.ID, user) : $$checkedList.delete(user.ID)
    })
  }

  deleteCheckedUser = (ID, e) => {

    const $$checkedList = this.state.$$checkedList
    this.setState({
      $$checkedList: $$checkedList.delete(ID)
    })
  }

  toogleCheckAll = (e)=> {
    const checked = e.target.checked

    const {$$checkedList, users} = this.state

    const userids = users.map(user=>user.ID)
    const $$usersGroup = Immutable.Map(users.map(user => [user.ID, user]))


    this.setState({
      $$checkedList: checked ? $$checkedList.merge($$usersGroup) : $$checkedList.filter((obj, keyName)=> userids.indexOf(keyName) < 0)

    })


  }


  onOk = () => {
    const {$$checkedList} = this.state
    const {multiple} = this.props

    this.props.onChange && this.props.onChange(multiple ? [...$$checkedList.values()] : $$checkedList.first())

  }
  onClose = () => {
    this.props.onClose()
  }

  render() {


    const {deptTree, users, $$checkedList, keyword} = this.state
    const {multiple} = this.props
    const checkedList = [...$$checkedList.values()]
    const userids = users.map(user=>user.ID)


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


              <Input style={{width: 200}} onPressEnter={this.search} value={keyword}
                     onChange={this.keywordChange}/>

              <Button type="primary" onClick={this.search}>搜 索</Button>

            </div>
            {/*--搜索栏--*/}


            {/*--已选择--*/}
            <div>
              <div>已选择</div>
              <div>
                <ul>


                  {checkedList.map(checkedUser => (<li key={checkedUser.ID}><img
                    src={checkedUser.Avatar}/><strong >{checkedUser.Name}</strong><span
                    className=""
                    onClick={this.deleteCheckedUser.bind(this, checkedUser.ID)}>x</span></li>))}
                </ul>
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

                  {multiple ? (<div>
                    <Checkbox onChange={this.toogleCheckAll}
                              checked={userids.length != 0 && Immutable.Set(userids).isSubset(Immutable.Set($$checkedList.keys()))}/>全选
                  </div>) : null}

                  <ul>
                    {users.map(user=><li key={user.ID}>
                      <Checkbox onChange={this.checkChange.bind(this, user)}
                                checked={$$checkedList.has(user.ID)}/>
                      <img src={user.Avatar} alt=""/>
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


SelectModal.propTypes = {
  multiple: PropTypes.bool,
  /*onMenuClick: PropTypes.func,
   menuOptions: PropTypes.array.isRequired,
   buttonStyle: PropTypes.object,
   dropdownProps: PropTypes.object,*/
}


SelectModal.defaultProps = {
  multiple: true
};


export default SelectModal
