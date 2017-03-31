/**
 * Created by janeluck on 3/31/17.
 */
import React, {PropTypes} from 'react'
import {Modal, Input, Button} from 'antd'
import Immutable from 'immutable'

class SelectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      loading: false,
      selectedDeptID: '',
      deptTree: [{}],

      users: [],

      keyword: '',
      selectedKeys: []

    }

  }

  componentDidMount() {
    //this.getTreeData()
    // todo 是否需要留有接口
    // this.getChildren(0)
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

            {/*--搜索栏--*/}
            <div>
              <span>搜索人员:</span>
              <Input  style={{width: 200}}/>
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
                <div>部门</div>
                <div>人员</div>

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
