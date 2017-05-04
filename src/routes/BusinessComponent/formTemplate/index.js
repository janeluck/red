/**
 * Created by janeluck on 4/12/17.
 */

import React from 'react'
import reqwest from 'reqwest'
import {Row, Col, Select, Modal} from 'antd'
import {FormTemplate} from '../../../components/businessComponents'


const Option = Select.Option;



const formInfo = {
  "AttrDefs": [
    {
      "GroupName": "分组1",
      "Groupcontent": [
        {
          "AttrLen": "128",
          "AttrPrec": "0",
          "AttrType": "4",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "简称",
          "Name": "ShortName"
        },
        {
          "AttrLen": "30",
          "AttrPrec": "0",
          "AttrType": "4",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "1",
          "IsUnique": "1",
          "Label": "名字",
          "Name": "Name"
        },
        {
          "AttrLen": "128",
          "AttrPrec": "0",
          "AttrType": "4",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "银行",
          "Name": "Bank"
        },
        {
          "AttrLen": "128",
          "AttrPrec": "0",
          "AttrType": "4",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "银行账号",
          "Name": "BankAccount"
        },
        {
          "AttrLen": "0",
          "AttrPrec": "0",
          "AttrType": "93",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "地址",
          "Name": "AddressList"
        },
        {
          "AttrLen": "0",
          "AttrPrec": "0",
          "AttrType": "94",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "电话列表",
          "Name": "PhoneList"
        },
        {
          "AttrLen": "128",
          "AttrPrec": "0",
          "AttrType": "9",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "网站",
          "Name": "WebSite"
        },
        {
          "AttrLen": "128",
          "AttrPrec": "0",
          "AttrType": "4",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "QQ",
          "Name": "Msnqq"
        },
        {
          "AttrLen": "128",
          "AttrPrec": "0",
          "AttrType": "4",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "微信",
          "Name": "Wechat"
        },
        {
          "AttrLen": "128",
          "AttrPrec": "0",
          "AttrType": "4",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "wwww",
          "Name": "Ww"
        },
        {
          "AttrLen": "128",
          "AttrPrec": "0",
          "AttrType": "8",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "邮箱",
          "Name": "Email"
        },
        {
          "AttrLen": "1000",
          "AttrPrec": "0",
          "AttrType": "4",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "业务类型",
          "Name": "BusinessType"
        },
        {
          "AttrLen": "1000",
          "AttrPrec": "0",
          "AttrType": "4",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "主产品",
          "Name": "MainProduct"
        },{
          "AttrLen": "1000",
          "AttrPrec": "0",
          "AttrType": "15",
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "日期",
          "Name": "date"
        },{
          "AttrLen": "1000",
          "AttrPrec": "0",
          "AttrType": "16",
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "日期时间",
          "Name": "datetime"
        },
        {
          "AttrLen": "50",
          "AttrPrec": "0",
          "AttrType": "13",
          "Enums": [
            {
              "k": "1",
              "v": "U5355U9009U98791"
            },
            {
              "k": "2",
              "v": "U5355U9009U98792"
            },
            {
              "k": "4",
              "v": "U5355U9009U98794"
            }
          ],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "aaa",
          "Name": "Acct_attrdef001"
        }
      ]
    },
    {
      "GroupName": "分组2",
      "Groupcontent": [
        {
          "AttrLen": "0",
          "AttrPrec": "0",
          "AttrType": "13",
          "Enums": [
            {
              "k": "1",
              "v": "U7ebfU7d22U5bfcU5165"
            },
            {
              "k": "193",
              "v": "dfdfdf"
            },
            {
              "k": "2",
              "v": "U624bU52a8U521bU5efa"
            },
            {
              "k": "3",
              "v": "PCU5bfcU5165"
            },
            {
              "k": "50",
              "v": "22221"
            },
            {
              "k": "184",
              "v": "U670bU53cbU4ecbU7ecd"
            },
            {
              "k": "186",
              "v": "U8001U5ba2U6237"
            },
            {
              "k": "185",
              "v": "U5e02U573aU6d3bU52a8"
            },
            {
              "k": "187",
              "v": "U641cU7d22"
            }
          ],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "来源",
          "Name": "Source"
        },
        {
          "AttrLen": "0",
          "AttrPrec": "0",
          "AttrType": "13",
          "Enums": [
            {
              "k": "138",
              "v": "U91cdU8981U5ba2U6237"
            },
            {
              "k": "139",
              "v": "U666eU901aU5ba2U6237"
            },
            {
              "k": "179",
              "v": "U54c8U54c8U5ba2U6237"
            },
            {
              "k": "195",
              "v": "2"
            }
          ],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "客户级别",
          "Name": "AccountLevel"
        },
        {
          "AttrLen": "0",
          "AttrPrec": "0",
          "AttrType": "13",
          "Enums": [
            {
              "k": "211",
              "v": "dwdwe"
            },
            {
              "k": "174",
              "v": "U4e0aU6d77"
            },
            {
              "k": "176",
              "v": "U5e7fU5dde"
            },
            {
              "k": "173",
              "v": "U6df1U5733"
            }
          ],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "区域",
          "Name": "Area"
        },
        {
          "AttrLen": "0",
          "AttrPrec": "0",
          "AttrType": "13",
          "Enums": [
            {
              "k": "176",
              "v": "U8f6fU4ef6"
            },
            {
              "k": "144",
              "v": "U901aU8baf"
            },
            {
              "k": "177",
              "v": "U7535U4fe1"
            },
            {
              "k": "178",
              "v": "U4e92U8054U7f51"
            },
            {
              "k": "180",
              "v": "U7535U5b50U5546U52a1"
            },
            {
              "k": "189",
              "v": "U4e92U8054U7f511234567"
            },
            {
              "k": "190",
              "v": "qqq"
            }
          ],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "工业",
          "Name": "Industry"
        },
        {
          "AttrLen": "0",
          "AttrPrec": "0",
          "AttrType": "13",
          "Enums": [
            {
              "k": "1",
              "v": "U65e0"
            },
            {
              "k": "2",
              "v": "U5c0fU578bU5ba2U6237"
            },
            {
              "k": "3",
              "v": "U4e2dU578bU5ba2U6237"
            },
            {
              "k": "4",
              "v": "U5927U578bU5ba2U6237"
            },
            {
              "k": "5",
              "v": "VIPU5ba2U6237"
            }
          ],
          "IsEdited": "1",
          "IsRequired": "1",
          "IsUnique": "0",
          "Label": "规模",
          "Name": "Scale"
        },
        {
          "AttrLen": "1000",
          "AttrPrec": "0",
          "AttrType": "6",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "描述",
          "Name": "Descriptions"
        },
        {
          "AttrLen": "128",
          "AttrPrec": "0",
          "AttrType": "4",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "消费者",
          "Name": "Customer"
        }
      ]
    },
    {
      "GroupName": "分组3",
      "Groupcontent": [
        {
          "AttrLen": "15",
          "AttrPrec": "0",
          "AttrType": "90",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "1",
          "IsUnique": "0",
          "Label": "U8d1fU8d23U4eba",
          "Name": "OwnerID"
        },
        {
          "AttrLen": "0",
          "AttrPrec": "0",
          "AttrType": "91",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "U53c2U4e0eU4eba",
          "Name": "RelUsers"
        },
        {
          "AttrLen": "15",
          "AttrPrec": "0",
          "AttrType": "17",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "U56feU7247",
          "Name": "Img"
        }
      ]
    },
    {
      "GroupName": "分组4",
      "Groupcontent": [
        {
          "AttrLen": "1000",
          "AttrPrec": "0",
          "AttrType": "6",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "备注",
          "Name": "Beizhu"
        },
        {
          "AttrLen": "0",
          "AttrPrec": "0",
          "AttrType": "11",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "U662fU5426U6807U8bb0U4e3aU91cdU8981U5ba2U6237",
          "Name": "IsFocus"
        },
        {
          "AttrLen": "0",
          "AttrPrec": "0",
          "AttrType": "94",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "手机列表",
          "Name": "PhoneList"
        },{
          "AttrLen": "0",
          "AttrPrec": "0",
          "AttrType": "101",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "行政区域",
          "Name": "District"
        }
      ]
    }
  ],
  "data": "<null>"
};







class FormTemplatePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterCase: {
                gender: '',
            }
        }
    }

    componentWillMount() {
        //this.getFormInfo()
    }


    getFormInfo = ()=> {

    }

    handleSelectChange = (gender) => {
        this.setState({
            filterCase: {
                gender,
            },
        })
    }

    submit = (values) => {
        console.log(values)
    }
    render() {


        return (<div className="content-inner">

            <h2 style={{margin: '16px 0'}}>form template</h2>
            <Row>
                <Col lg={18} md={24}>


                </Col>

            </Row>

            <div>
                <FormTemplate
                    onSubmit={this.submit}
                    dataSource={formInfo['AttrDefs']}
                    //onSubmit={this.submit}
                />

            </div>
        </div>)
    }
}


export default FormTemplatePage
