/**
 * Created by janeluck on 4/12/17.
 */

import React from 'react'

import {Row, Col, Select, Modal} from 'antd'
import {FormTemplate} from '../../../components/businessComponents'
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class FormTemplatePage extends React.Component {
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
        <FormTemplate />

      </div>
    </div>)
  }
}


export default FormTemplatePage
