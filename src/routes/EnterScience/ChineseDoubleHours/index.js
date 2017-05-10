/**
 * Created by janeluck on 3/31/17.
 */
import React from 'react'
import {Card, Row, Col, Select} from 'antd'
import _ from 'lodash'

const jsonInfo = '[["chen","hours","associatedanimal","associateddirection"],' +
  '["zi (tzu)","11 pm–1 am","rat","N"],' +
  '["chou","1–3 am","ox","NNE"],' +
  '["yin","3–5","tiger","ENE"],' +
  '["mao","5–7","rabbit","E"],' +
  '["chen","7–9","dragon","ESE"],' +
  '["si (szu)","9–11","snake","SSE"],' +
  '["wu","11 am–1 pm","horse","S"],' +
  '["wei","1–3","sheep","SSW"],' +
  '["shen","3–5","monkey","WSW"],' +
  '["you","5–7","chicken","W"],' +
  '["xu (hsü)","7–9","dog","WNW"],' +
  '["hai","9–11","pig","NNW"]]'


const doubleHoursInfo = [
  {
    name: '子',
    spell: 'zǐ',
    hours: '11 pm-1 am',
    associatedanimal: 'rat',
    associateddirection: 'N',
  },
  {
    name: '丑',
    spell: 'chou',
    hours: '1–3 am',
    associatedanimal: 'ox',
    associateddirection: 'NNE',
  }, {
    name: '寅',
    spell: 'yin',
    hours: '3–5 am',
    associatedanimal: 'tiger',
    associateddirection: 'ENE',
  }, {
    name: '卯',
    spell: 'mao',
    hours: '5-7 am',
    associatedanimal: 'rabbit',
    associateddirection: 'E',
  },
  {
    name: '辰',
    spell: 'chen',
    hours: '7–9 am',
    associatedanimal: 'dragon',
    associateddirection: 'ESE',
  }, {
    name: '巳',
    spell: 'si',
    hours: '9-11 am',
    associatedanimal: 'snake',
    associateddirection: 'SSE',
  }, {
    name: '午',
    spell: 'wu',
    hours: '11 am-1 pm',
    associatedanimal: 'horse',
    associateddirection: 'S',
  },
  {
    name: '未',
    spell: 'wei',
    hours: '1–3 pm',
    associatedanimal: 'sheep',
    associateddirection: 'NNE',
  }, {
    name: '申',
    spell: 'shen',
    hours: '3–5 pm',
    associatedanimal: 'monkey',
    associateddirection: 'WSW',
  }, {
    name: '酉',
    spell: 'you',
    hours: '5-7 pm',
    associatedanimal: 'chicken',
    associateddirection: 'W',
  },
  {
    name: '戌',
    spell: 'xu',
    hours: '7–9 pm',
    associatedanimal: 'dog',
    associateddirection: 'WNW',
  }, {
    name: '亥',
    spell: 'hai',
    hours: '9-11 pm',
    associatedanimal: 'pig',
    associateddirection: 'NNW',
  },
]


class ChineseDoubleHours extends React.Component {
  constructor(props) {
    super(props)
  }


  renderCard = (item, index) => {
    return <Col key={index}  sm={12} md={8} lg={6} style={{paddingLeft: 16, paddingRight: 16}}>
      <Card title={item.name}>
        <p>{item.spell}</p>
        <p>{item.hours}</p>
        <p>{item.associatedanimal}</p>
        <p>{item.associateddirection}</p>
      </Card>
    </Col>
  }

  render() {


    return (
      <div style={{background: '#ECECEC', padding: '30px'}}>
        <Row style={{marginLeft: -16, marginRight: -16}}>
          {_.map(doubleHoursInfo, this.renderCard)}
        </Row>
      </div>
    )
  }
}

class ChineseDoubleHoursPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {


    return (<div className="content-inner">

      <h2 style={{margin: '16px 0'}}>ChineseDoubleHoursPage</h2>

      <ChineseDoubleHours />

    </div>)
  }
}


export default ChineseDoubleHoursPage
