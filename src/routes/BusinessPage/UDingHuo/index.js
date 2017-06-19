/**
 * Created by janeluck on 17/6/19.
 */
import React from 'react'
import { Steps, Button } from 'antd';
import _ from 'lodash'
const Step = Steps.Step;
const array = Array.apply(null, Array(Math.floor(Math.random() * 3) + 3));
const steps = ['企业', '人员', '客户']

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      current: Math.floor(Math.random() * steps.length),
    }
  }

  prev = () => {
    let current = this.state.current - 1;

    this.setState({ current });
  }
  next = () => {
    let current = this.state.current + 1;

    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 24 }}>当前正在执行第 {current + 1} 步</div>
        <Steps current={current}>
          {steps.map((s, i) => <Step key={i} title={`${s}的对应`}  />)}


        </Steps>

        <div style={{ marginTop: 24 }}>

          {current > 0  && <Button onClick={this.prev} disabled={current == 0}>上一步</Button>}

          {current < steps.length - 1 && <Button onClick={this.next}>下一步</Button>}

        </div>
      </div>
    );
  }
}
