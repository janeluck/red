/**
 * Created by janeluck on 5/11/17.
 */

import React from 'react'
import {Row, Col, Select, Modal, Button, Input, Tag} from 'antd'
const Option = Select.Option;
import styles from './index.less'


class AntdStylePage extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {


    return (<div className="content-inner">

        <h2 style={{margin: '16px 0'}}>antd style demo</h2>
        <div>
          pagination
          <div>
            <ul className={styles['jane-pagination']}>
              <li className={styles['jane-pagination-item']}><a>1</a></li>
              <li className={styles['jane-pagination-item']}><a>1</a></li>
              <li className={styles['jane-pagination-item']}><a>1</a></li>
            </ul>


            <div style={{height: 100, marginBottom: -75, width: 100, backgroundColor: 'red'}}>A</div>
            <div style={{height: 100, marginTop: -50, marginLeft: 50, width: 100, backgroundColor: 'green'}}>B</div>
          </div>

        </div>
      </div>
    )
  }
}


export default AntdStylePage
