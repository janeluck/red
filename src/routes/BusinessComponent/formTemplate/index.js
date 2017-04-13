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
      "GroupName": "U5206U7ec41",
      "Groupcontent": [
        {
          "AttrLen": "128",
          "AttrPrec": "0",
          "AttrType": "4",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "U5ba2U6237U7b80U79f0",
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
          "Label": "U516cU53f8U540dU79f0",
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
          "Label": "U5f00U6237U94f6U884c",
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
          "Label": "U94f6U884cU8d26U53f7",
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
          "Label": "U516cU53f8U5730U5740",
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
          "Label": "U516cU53f8U7535U8bdd",
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
          "Label": "U516cU53f8U7f51U5740",
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
          "Label": "U5faeU4fe1",
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
          "Label": "U65faU65faU53f7",
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
          "Label": "U7535U5b50U90aeU4ef6",
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
          "Label": "U4e1aU52a1U7c7bU578b",
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
          "Label": "U4e3bU8425U4ea7U54c1",
          "Name": "MainProduct"
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
          "Label": "U81eaU5b9aU4e49U591aU9009",
          "Name": "Acct_attrdef001"
        }
      ]
    },
    {
      "GroupName": "U7ba1U7406U4fe1U606f",
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
          "Label": "U5ba2U6237U6765U6e90",
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
          "Label": "U5ba2U6237U7ea7U522b",
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
          "Label": "U6240U5c5eU533aU57df",
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
          "Label": "U884cU4e1aU5206U7c7b",
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
          "Label": "U5ba2U6237U89c4U6a21",
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
          "Label": "U5ba2U6237U7b80U4ecb",
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
          "Label": "U516cU53f8U8d1fU8d23U4eba",
          "Name": "Customer"
        }
      ]
    },
    {
      "GroupName": "U9500U552eU4fe1U606f",
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
      "GroupName": "U5176U4ed6U4fe1U606f",
      "Groupcontent": [
        {
          "AttrLen": "1000",
          "AttrPrec": "0",
          "AttrType": "6",
          "Enums": [],
          "IsEdited": "1",
          "IsRequired": "0",
          "IsUnique": "0",
          "Label": "U5907U6ce8U5b57U6bb5",
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
          "Label": "U516cU53f8U7535U8bdd",
          "Name": "PhoneList"
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

    submit = () => {

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
                    dataSource={formInfo['AttrDefs']}
                    //onSubmit={this.submit}
                />

            </div>
        </div>)
    }
}


export default FormTemplatePage
