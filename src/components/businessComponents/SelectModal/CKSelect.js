/**
 * Created by janeluck on 3/31/17.
 * 超客业务组件
 * 选人和选部门两种模式
 * 支持单多根(后端传回的部门树结构可为Object或者Array)
 * 支持单多选
 * todo: 1. 是否需要缓存部门人员列表数据?(在包含下级的条件下,全公司会有大量的数据), 2. 关联上下级, 半选状态等(还是按照之前的模式, 仅支持自动选中下级?)
 */
import React, {PropTypes} from 'react'
import {Modal, Input, Button, Tree, Checkbox, Spin} from 'antd'
import Immutable from 'immutable'
import reqwest from 'reqwest'
import styles from './SelectModal.less'
import _ from 'lodash'

const TreeNode = Tree.TreeNode

const generatorTree = (data) => {
  // 因为空数组也会使TreeNode渲染出可展开的图标, 此处作处理返回false
  if (data && data.length == 0) return false
  return _.map(data, (item)=> {
    return <TreeNode key={item.ID} title={item.Name}>
      {generatorTree(item.Children)}
    </TreeNode>
  })
}


const toArray = (value) => {
  let ret = value;
  if (value === undefined) {
    //处理null, undefined
    ret = [];
  } else if (!_.isArray(value)) {
    ret = [value];
  }
  return ret;
}


// 后端传回的ID类型有时为Number, 统一处理成字符串
const IDtoString = (data) => {
  // 后端数据类型传入不稳定(Children字段可能不传或者传回null或数组)。利用_.map的容错处理
  return _.map(data, item => {
    return _.extend(item, {
      ID: item.ID + '',
      Children: IDtoString(item.Children)
    })
  })
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
      deptTree: [{
        Name: '部门1',
        ID: '0'
      }, {
        Name: '部门2',
        ID: '232'
      }],
      $$value,
      users: [],
      keyword: '',
      visible: props.visible,

    }
  }

  getOriginalValue = (value) => {
    // 单选时可只传入对象, 这里统一处理为数组, 生成以ID为key的Map结构数据
    return Immutable.Map(_.map(toArray(value), item => [item.ID, item]))
  }

  componentWillMount() {
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


  getDataOption = (property) => {

    // 获取部门树和人员列表的默认url
    const defaultDataOptions = {
      // 获取部门树
      deptUrl: location.origin + '/api/deptTree',
      // deptParams: {},

      // 通过部门id获取人员列表
      personUrl: location.origin + '/api/personList',
      // personParams: {},

      // 通过关键字获取人员列表
      searchUrl: location.origin + '/api/searchUser',
      //searchParams

    }

    return _.get(this.props.dataOptions, property) || defaultDataOptions[property]

  }


  getDeptTree = () => {
    const that = this

    reqwest({
      url: that.getDataOption('deptUrl'),
      type: 'json',
      data: that.getDataOption('deptParams')
    }).then(data=> {
      that.setState({
        deptTree: IDtoString(toArray(data.data)),
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
        url: that.getDataOption('personUrl'),
        type: 'json',
        method: 'post',
        data: _.extend(that.getDataOption('personParams'), {deptid: id})
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
        url: that.getDataOption('searchUrl'),
        type: 'json',
        method: 'post',
        data: _.extend(that.getDataOption('searchParams'), {keyword: keyword})
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
    // const id = e.node.props.eventKey
    this.getList(e.node.props.eventKey)

  }


  deptCheckChange = (checkedKeys, e)=> {
    const checked = e.checked
    const deptProps = e.node.props
    const {multiple}= this.props
    const $$value = this.state.$$value
    this.setState({
      $$value: checked ? (multiple ? $$value : Immutable.Map())['set'](deptProps['eventKey'], {
        ID: deptProps['eventKey'],
        Name: deptProps['title']
      }) : $$value.delete(deptProps['eventKey'])
    })
  }


  personCheckChange = (user, e)=> {
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
    const {multiple, mode} = this.props


    const value = [...$$value.values()]
    const userids = users.map(user=>user.ID)


    // 选择部门时, 树节点为checkable
    // 选择人员时, 树节点为selectable
    let treeProps

    if (mode == 'person') {
      treeProps = {
        onSelect: this.onSelect
      }
    } else {
      treeProps = {
        checkable: true,
        checkStrictly: true,
        onCheck: this.deptCheckChange,
        checkedKeys: {checked: [...$$value.keys()]},

        // 单根情况下默认展开根, 多根的时候不需要
        defaultExpandedKeys: deptTree.length > 1 ? [] : [deptTree[0]['ID']]
      }
    }

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

              {mode == 'person' && (<div className={styles.searchBar}>
                <span>搜索人员:</span>


                <Input style={{width: 200}} onPressEnter={this.search} value={keyword}
                       onChange={this.keywordChange}/>

                <Button type="primary" onClick={this.search}>搜 索</Button>

              </div>) }


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
                      {...treeProps}

                    >
                      {generatorTree(deptTree)}
                    </Tree>


                  </div>

                </div>

                <div className={styles.selectPerson}>
                  <div>人员</div>

                  <div>

                    {multiple && !!userids.length && (<div>
                      <Checkbox onChange={this.toogleCheckAll}
                                checked={userids.length != 0 && Immutable.Set(userids).isSubset(Immutable.Set($$value.keys()))}/>全选
                    </div>)}

                    <ul className={styles.personListWrap}>
                      {users.map(user=><li key={user.ID}>
                        <Checkbox onChange={this.personCheckChange.bind(this, user)}
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
  mode: PropTypes.oneOf(['dept', 'person']),
  multiple: PropTypes.bool,
  visible: PropTypes.bool,
  value: PropTypes.oneOfType([
    valueObjectShape,
    PropTypes.arrayOf(valueObjectShape),
  ]),
  // 获取部门树和人员列表的url和参数
  dataOptions: PropTypes.object






  /* menuOptions: PropTypes.array.isRequired,
   buttonStyle: PropTypes.object,
   dropdownProps: PropTypes.object,*/
}


CKSelect.defaultProps = {
  multiple: true,
  visible: false,
  // 默认为选人模式
  mode: 'person'
};


export default CKSelect
