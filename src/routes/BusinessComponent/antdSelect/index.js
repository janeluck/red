/**
 * Created by janeluck on 4/11/17.
 */
/**
 * Created by janeluck on 3/31/17.
 */
import React from 'react'
import { isString } from 'lodash'

import {Row, Col, Select, Modal, Button, Input, Tag} from 'antd'
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}








function formGroup(Component, config) {
  const FormGroup = React.createClass({
    __renderLabel() {
      // check if the passed value is a string using Lodash#isString
      if (isString(this.props.label)) {
        return(
          <label className="form-label" htmlFor={ this.props.name }>
            { this.props.label }
          </label>
        );
      }
    },

    __renderElement() {
      // We need to see if we passed a Component or an Element
      // such as Profile vs. <input type="text" />
      if (React.isValidElement(Component)) return React.cloneElement(Component, this.props);
      return( <Component { ...this.props } />);
    },

    render() {
      return(
        <div className="form-group">
          { this.__renderLabel() }
          { this.__renderElement() }
        </div>
      );
    }
  });

  return(<FormGroup { ...config } />);
}



class SelectModalPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterCase: {
        gender: '',
      },
      isChanged: false
    }
  }

  change = () =>{
    const {isChanged} = this.state
    this.setState({
      isChanged: !isChanged
    })
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
        <div key={Math.random(0, 1)}>{Math.random(0, 1)}</div>
        <div key={Math.random(0, 1)}>11111111</div>
        <Button onClick={this.change}>change</Button>

      </div>
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
    </div>)
  }
}


export default SelectModalPage
