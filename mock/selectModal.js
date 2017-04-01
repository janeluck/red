/**
 * Created by janeluck on 3/31/17.
 */
const qs = require('qs')
const Mock = require('mockjs')
import mockStorge from '../src/utils/mockStorge'

let dataKey = mockStorge('SelectModal', Mock.mock({

  'Name': '全公司',
  'ID': '0',
  'Code': '000001',
  'StopFlag': '0',
  'Children|5': [
    {
      'ID|+1': 1,
      Name: '@cword(5, 7)',
      //nickName: '@last',
      Code: /^[123456789]\d{6}$/,
      StopFlag: '0',
      'Children|5': [
        {
          'ID|+1': 11,
          Name: '@cword(2, 5)',
          //nickName: '@last',
          Code: /^[123456789]\d{6}$/,
          StopFlag: '0',
          'Children': [

            {
              'ID|+1': 111,
              Name: '@cword(5, 7)',
              //nickName: '@last',
              Code: /^[123456789]\d{6}$/,
              StopFlag: '0',
              'Children|5': [
                {
                  'ID|+1': 222,
                  Name: '@cword(5, 7)',
                  //nickName: '@last',
                  Code: /^[123456789]\d{6}$/,
                  StopFlag: '0',
                },


              ]
            },

            {
              'ID|+1': 33,
              Name: '@cword(2, 5)',
              //nickName: '@last',
              Code: /^[123456789]\d{6}$/,
              StopFlag: '0',
              'Children|5': [

                {
                  'ID|+1': 333,
                  Name: '@cword(5, 7)',
                  //nickName: '@last',
                  Code: /^[123456789]\d{6}$/,
                  StopFlag: '0',
                  'Children|5': [
                    {
                      'ID|+1': 444,
                      Name: '@cword(5, 7)',
                      //nickName: '@last',
                      Code: /^[123456789]\d{6}$/,
                      StopFlag: '1',
                    },


                  ]
                },

              ]
            },
          ]
        },

      ]
    },
  ]

}))

let deptTreeData = global[dataKey]


module.exports = {

  'GET /api/deptTree' (req, res) {

    res.json({success: true, data: deptTreeData})
  },

  'POST /api/personList' (req, res) {
    const deptID = Number(req.body.slice(3))
    res.json({
      success: true, data: Mock.mock({
        'users|0-10': [
          {
            "ID|+1": deptID * 10  ,
            "Name": "@cname",
            Avatar () {
              return Mock.Random.image('20x20', Mock.Random.color(), '#757575', 'png', this.Name.substr(0, 1))
            },
          }
        ]
      })['users']
    })
  },

}
