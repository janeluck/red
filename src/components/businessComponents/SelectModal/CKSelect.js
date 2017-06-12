/**
 * Created by janeluck on 3/31/17.
 * 超客业务组件
 * 选人和选部门两种模式
 * 支持单多选
 */
import React, {PropTypes} from 'react'
import {Modal, Input, Button, Tree, Checkbox, Spin} from 'antd'
import Immutable from 'immutable'
import reqwest from 'reqwest'
import styles from './SelectModal.less'
import _ from 'lodash'


const TreeNode = Tree.TreeNode
const generatorTree = (data) => {
  /*if (data.Children && data.Children.length != 0) {
   return <TreeNode key={data.ID} title={data.Name}>
   {data.Children.map(generatorTree)}
   </TreeNode>
   }
   return <TreeNode key={data.ID} title={data.Name}/>*/

  // 后端数据类型传入不稳定(Children字段可能不传或者传回null或数组)。抛弃上面的写法, 利用_.map的容错处理
  return <TreeNode key={data.ID} title={data.Name}>
    {_.map(data.Children, generatorTree)}
  </TreeNode>
}



const toArray = (value) => {
  let ret = value;
  if (value === undefined) {
    ret = [];
  } else if (!_.isArray(value)) {
    ret = [value];
  }
  return ret;
}


// 传入值的类型要求
const valueObjectShape = PropTypes.shape({
  Name: PropTypes.string,
  ID: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
})


class CKSelect extends React.Component {
  constructor(props) {
    super(props);


    const $$value = this.getOriginalValue(props.value)

    this.state = {

      loading: true,
      deptTree: {
        Name: '',
        ID: 0
      },
      $$value,
      users: [],
      keyword: '',
      visible: props.visible


    }
  }

  getOriginalValue = (value) => {
    // 单选时可只传入对象, 这里统一处理为数组, 生成以ID为key的Map结构数据
    return Immutable.Map(_.map(toArray(value), item => [item.ID, item]))
  }

  componentWillMount() {
    console.time('mountTimes')
    this.getDeptTree()
  }

  componentWillReceiveProps(nextProps) {
    // Q: react内部会把下面两个setState放入了同一个enqueueSetState事务队列中
    // todo: react是以什么为标准去判断是放入队列还是立即执行?


    // Should be a controlled component.

    if ('visible' in nextProps) {
      const visible = nextProps.visible;
      this.setState({
        visible
      });

    }

    if ('value' in nextProps) {
      const $$value = this.getOriginalValue(nextProps.value);
      this.setState({
        $$value
      });

    }
  }


  /* shouldComponentUpdate(){
   //return false
   // 可以在这里提升效率
   }*/


  getDeptTree = () => {
    const that = this

    // todo 这里的组织树的数据是否需要缓存(与行政区域的数据不同, 不能放入localStorage中, 可以放在当前window里window.chaokeCache.selectModalTree)?
    // 这样写是么有用的。。。
    // 放在表单动态渲染时,最好还是由form层取数据
    debugger
    reqwest({
      url: location.origin + '/api/deptTree',
      type: 'json'
    }).then(data=> {
      that.setState({
        deptTree: data.data,
        loading: false
      })
    })


  }

  getList = (id) => {
    const that = this
    that.setState({
      loading: true

    }, ()=> {
      reqwest({
        url: location.origin + '/api/personList',
        type: 'json',
        method: 'post',
        data: {
          id
        }
      }).then(data=> {
        that.setState({
          users: data.data,
          loading: false,
          keyword: ''
        })
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
    //const keyword = that.state.keyword.replace(/(^\s*)|(\s*$)/g, "")
    const keyword = _.trim(that.state.keyword)

    if (keyword == '') return
    that.setState({
      loading: true
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

    const $$value = this.state.$$value
    this.setState({
      $$value: checked ? (multiple ? $$value : Immutable.Map())['set'](user.ID, user) : $$value.delete(user.ID)
    })
  }

  deleteCheckedUser = (ID, e) => {

    const $$value = this.state.$$value
    this.setState({
      $$value: $$value.delete(ID)
    })
  }

  toogleCheckAll = (e)=> {
    const checked = e.target.checked

    const {$$value, users} = this.state

    const userids = users.map(user=>user.ID)
    const $$usersGroup = Immutable.Map(users.map(user => [user.ID, user]))


    this.setState({
      $$value: checked ? $$value.merge($$usersGroup) : $$value.filter((obj, keyName)=> userids.indexOf(keyName) < 0)

    })


  }


  onOk = () => {
    const {$$value} = this.state
    const {multiple} = this.props

    this.props.onOk && this.props.onOk(multiple ? [...$$value.values()] : $$value.first())

  }
  onCancel = () => {
    this.props.onCancel && this.props.onCancel()
  }

  render() {


    const {deptTree, users, $$value, keyword, loading, visible} = this.state
    const {multiple} = this.props



    const value = [...$$value.values()]
    const userids = users.map(user=>user.ID)

    return (


      <div>


        {this.props.children}
        <Modal
          width={514}
          title={"选择人员"}
          visible={visible}
          onOk={this.onOk}
          maskClosable={false}
          onCancel={this.onCancel}
        >


          <Spin spinning={loading}>
            <div className={styles.wrap}>

              {/*--搜索栏--*/}
              <div className={styles.searchBar}>
                <span>搜索人员:</span>


                <Input style={{width: 200}} onPressEnter={this.search} value={keyword}
                       onChange={this.keywordChange}/>

                <Button type="primary" onClick={this.search}>搜 索</Button>

              </div>
              {/*--搜索栏--*/}


              {/*--已选择--*/}
              <div className={styles.selectedResult}>
                <div>已选择</div>
                <div>
                  <ul>


                    {value.map(checkedUser => (<li key={checkedUser.ID}><img
                      src={checkedUser.Avatar}/><strong >{checkedUser.Name}</strong><span
                      onClick={this.deleteCheckedUser.bind(this, checkedUser.ID)}>x</span></li>))}
                  </ul>
                </div>

              </div>
              {/*--已选择--*/}


              {/*--部门人员双栏--*/}

              <div className={styles.selectWrap}>
                <div className={styles.selectDept}>
                  <div>部门</div>
                  <div className={styles.deptTreeWrap}>

                    <Tree
                      onSelect={this.onSelect}

                    >
                      {generatorTree(deptTree)}
                    </Tree>


                  </div>

                </div>

                <div className={styles.selectPerson}>
                  <div>人员</div>

                  <div>

                    {multiple && userids.length ? (<div>
                      <Checkbox onChange={this.toogleCheckAll}
                                checked={userids.length != 0 && Immutable.Set(userids).isSubset(Immutable.Set($$value.keys()))}/>全选
                    </div>) : null}

                    <ul className={styles.personListWrap}>
                      {users.map(user=><li key={user.ID}>
                        <Checkbox onChange={this.checkChange.bind(this, user)}
                                  checked={$$value.has(user.ID)}/>
                        <img src={user.Avatar} alt={user.Name}/>
                        {user.Name}


                      </li>)}

                    </ul>


                  </div>
                </div>


              </div>


              <div>


              </div>


            </div>
          </Spin>


        </Modal>
      </div>



    );
  }
}


CKSelect.propTypes = {

  onOk: PropTypes.func,
  onCancel: PropTypes.func,


  multiple: PropTypes.bool,
  visible: PropTypes.bool,
  value: PropTypes.oneOfType([
    valueObjectShape,
    PropTypes.arrayOf(valueObjectShape),
  ]),
  /* menuOptions: PropTypes.array.isRequired,
   buttonStyle: PropTypes.object,
   dropdownProps: PropTypes.object,*/
}


CKSelect.defaultProps = {
  multiple: true,
  visible: false
};


export default CKSelect
