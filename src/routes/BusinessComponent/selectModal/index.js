/**
 * Created by janeluck on 3/31/17.
 */
import React from 'react'
import {SelectModal} from '../../../components/businessComponents'
import CKSelect from '../../../components/businessComponents/SelectModal/CKSelect'
import {Table, Row, Col, Card, Select, Button} from 'antd'
import _ from 'lodash'
class SelectModalPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      values: {ID: 1, Name: 'jane'}

    }
  }

  changeVisible = (visible)=> {
    this.setState({
      visible
    })
  }
  setValue = (values) => {
    this.setState({
      values,
      visible: false
    })
  }

  render() {
    const {visible, values} = this.state

    return (<div className="content-inner">

      <h2 style={{margin: '16px 0'}}>选人选部门组件demo</h2>
      <Row>
        <Col lg={18} md={24}>
          {/* <SelectModal visible />*/}


          <Button onClick={this.changeVisible.bind(this, true)}>请选择</Button>
          <ul>

            {_.map(_.isArray(values) ? values : [values], item => <li key={item.ID}>{item.Name}</li>)}

          </ul>
          <CKSelect visible={visible} value={values} onCancel={this.changeVisible.bind(this, false)}
                    onOk={this.setValue}/>

          {/*
           <CKSelect>
           <Button>请选择</Button>
           </CKSelect>
           */}

        </Col>
      </Row>
    </div>)
  }
}


export default SelectModalPage
