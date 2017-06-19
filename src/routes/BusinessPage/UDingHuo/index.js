/**
 * Created by janeluck on 17/6/19.
 */
import React from 'react'
import {Steps, Button, Form, Input} from 'antd';
import _ from 'lodash'
import styles from './index.less'
import MappingTable from '../MappingTable'


const Step = Steps.Step;
const FormItem = Form.Item;
const steps = ['企业', '人员', '客户']

// 企业的对应表单项
const corporationItems = [
  {
    label: 'U订货平台的企业名称',
    name: 'U'
  }, {
    label: 'Key',
    name: 'K'
  }, {
    label: 'Secret',
    name: 'S'
  }, {
    label: 'Token',
    name: 'T'
  }
]

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
    }
  }

  prev = () => {
    let current = this.state.current - 1;

    this.setState({current});
  }
  next = () => {
    let current = this.state.current + 1;

    this.setState({current});
  }

  render() {
    const {current} = this.state;
    const that = this


    let First = class  extends React.Component {
      constructor(props) {
        super(props)

      }

      handleSubmit = (e) => {

        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          console.log('Received values of form: ', values);
          if (!err) {
            console.log('Received values of form: ', values);
            that.next()
          }

        });

      }

      render() {

        const formItemLayout = {
          labelCol: {span: 6},
          wrapperCol: {span: 18},
        };
        const {getFieldDecorator} = this.props.form;
        // attrType 可为String, Number类型。 传入的时候统一处理为Number

        return (<div>

            <Form onSubmit={this.handleSubmit} className={styles.corporationForm}>

              {
                _.map(corporationItems, item => {
                  return <FormItem
                    {...formItemLayout}

                    key={item.name}
                    label={item.label}
                  >
                    {getFieldDecorator(item.name, {
                      rules: [{required: true, message: `${item.name}不能为空`}],
                    })(
                      <Input style={{width: "300px"}}/>
                    )}
                  </FormItem>
                })

              }
              <FormItem
                wrapperCol={{span: 12, offset: 6}}
              >
                <Button type="primary" htmlType="submit">下一步</Button>
              </FormItem>

            </Form>
          </div>
        )


      }
    }

    return (
      <div>
        <div style={{marginBottom: 24}}>当前正在执行第 {current + 1} 步</div>
        <Steps current={current}>
          {_.map(steps, (s, i) => <Step key={i} title={`${s}的对应`}/>)}


        </Steps>


        {current == 0 && React.createElement(Form.create()(First))}
        {current == 1 && <MappingTable />}
        {current == 2 && <MappingTable />}


        <div style={{marginTop: 24}}>

          {current > 0 && <Button onClick={this.prev} disabled={current == 0}>上一步</Button>}

          {current < steps.length - 1 && <Button onClick={this.next}>下一步</Button>}

        </div>
      </div>
    );
  }
}
