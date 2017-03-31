/**
 * Created by janeluck on 3/31/17.
 */
import React from 'react'
import {SelectModal} from '../../../components/businessComponents'
import {Table, Row, Col, Card, Select} from 'antd'

class SelectModalPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterCase: {
        gender: '',
      }
    }
  }

  handleSelectChange = (gender) => {
    this.setState({
      filterCase: {
        gender,
      },
    })
  }

  render() {


    return (<div className="content-inner">

      <h2 style={{margin: '16px 0'}}>选人选部门组件demo</h2>
      <Row>
        <Col lg={18} md={24}>
          <SelectModal />
        </Col>
      </Row>
    </div>)
  }
}


export default SelectModalPage
