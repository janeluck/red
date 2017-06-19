/**
 * Created by janeluck on 17/6/6.
 */
import React from 'react'
import {Card, Row, Col, Select, Tabs} from 'antd'
import _ from 'lodash'
import MappingTable from './MappingTable'
import UDingHuo from './UDingHuo'
const TabPane = Tabs.TabPane;

class BusinessPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div className="content-inner">

      <h2 style={{margin: '16px 0'}}>BusinessPage</h2>
      <div>
        <Tabs defaultActiveKey="2" >
          <TabPane tab="Tab 1" key="1"><MappingTable /></TabPane>
          <TabPane tab="Tab 2" key="2"><UDingHuo /></TabPane>
          <TabPane tab="Tab 3" key="3">3333</TabPane>

        </Tabs>
      </div>

    </div>)
  }
}


export default BusinessPage
