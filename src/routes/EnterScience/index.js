/**
 * Created by janeluck on 17/5/18.
 */
/**
 * Created by janeluck on 3/31/17.
 */
import React from 'react'
import {Card, Row, Col, Select, Tabs} from 'antd'
import _ from 'lodash'
import ChineseDoubleHours from './ChineseDoubleHours'
import JapaneseKana from './JapaneseKana'
const TabPane = Tabs.TabPane;

class EnterSciencePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div className="content-inner">

      <h2 style={{margin: '16px 0'}}>EnterSciencePage</h2>
      <div>
        <Tabs defaultActiveKey="2" >
          <TabPane tab="Tab 1" key="1"><ChineseDoubleHours /></TabPane>
          <TabPane tab="Tab 2" key="2"><JapaneseKana /></TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>

    </div>)
  }
}


export default EnterSciencePage
