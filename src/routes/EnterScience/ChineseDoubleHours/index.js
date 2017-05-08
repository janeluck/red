/**
 * Created by janeluck on 3/31/17.
 */
import React from 'react'
import {Card, Row, Col, Select} from 'antd'


const jsonInfo = '[["chen","hours","associatedanimal","associateddirection"],["zi (tzu)","11 pm–1 am","rat","N"],["chou","1–3 am","ox","NNE"],["yin","3–5","tiger","ENE"],["mao","5–7","rabbit","E"],["chen","7–9","dragon","ESE"],["si (szu)","9–11","snake","SSE"],["wu","11 am–1 pm","horse","S"],["wei","1–3","sheep","SSW"],["shen","3–5","monkey","WSW"],["you","5–7","chicken","W"],["xu (hsü)","7–9","dog","WNW"],["hai","9–11","pig","NNW"]]'


const doubleHoursInfo = [
  {
    name: '子',
    spell: 'zǐ',
    hours: '11 pm-1 am',

  }
]


class ChineseDoubleHours extends React.Component {
  constructor(props) {
    super(props)
  }


  renderCard = () => {

  }

  render() {


    return (
      <div style={{background: '#ECECEC', padding: '30px'}}>
        <Card title="Card title" bordered={false} style={{width: 300}}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    )
  }
}

class ChineseDoubleHoursPage extends React.Component {
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

      <h2 style={{margin: '16px 0'}}>ChineseDoubleHoursPage</h2>

      <ChineseDoubleHours />

    </div>)
  }
}


export default ChineseDoubleHoursPage
