/**
 * Created by janeluck on 4/11/17.
 */
/**
 * Created by janeluck on 3/31/17.
 */
import React from 'react'

import {Row, Col, Select, Modal, Input, Tag} from 'antd'
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

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

      <h2 style={{margin: '16px 0'}}>antd component demo</h2>
      <Row>
        <Col lg={18} md={24}>


        </Col>

      </Row>

      <div>
        <Modal visible={false}>
          <div id="selectWrap">
            <Select
              labelInValue
              multiple
              mode="multiple"
              style={{width: '100%'}}
              placeholder="Please select"
              onChange={handleChange}
              getPopupContainer = {()=> document.getElementById('selectWrap')}
            >
              {children}
            </Select>
          </div>
        </Modal>


      </div>
    </div>)
  }
}


export default SelectModalPage
