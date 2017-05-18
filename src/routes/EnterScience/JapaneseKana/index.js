/**
 * Created by janeluck on 3/31/17.
 */
import React from 'react'
import {Card, Row, Col, Select} from 'antd'
import _ from 'lodash'

const kana = [
  'a',
  'i',
  'u',
  'e',
  'o',
  'ka',
  'chi',
  'ku',
  'ke',
  'ko',
  'sa',
  'shi',
  'su',
  'se',
  'so'
]





class JapaneseKana extends React.Component {
   constructor(props) {
    super(props)
  }


  renderCard = (item, index) => {
    return <Col key={index} sm={6}  lg={12} style={{paddingLeft: 16, paddingRight: 16}}>
      <Card title={item}>
        <img src={'http://oq4xlbi1j.bkt.clouddn.com/'+ item +'0.jpg'} alt=""/>
        <img src={'http://oq4xlbi1j.bkt.clouddn.com/' + item +'1.jpg'} alt=""/>
        <p>{item}</p>

      </Card>
    </Col>
  }

  render() {


    return (
      <div style={{background: '#ECECEC', padding: '30px'}}>
        <Row style={{marginLeft: -16, marginRight: -16}}>
          {_.map(kana, this.renderCard)}
        </Row>
      </div>
    )
  }
}


export default JapaneseKana
