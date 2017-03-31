/**
 * Created by janeluck on 3/31/17.
 */
const qs = require('qs')
const Mock = require('mockjs')
import mockStorge from '../src/utils/mockStorge'

let dataKey = mockStorge('SelectModal', Mock.mock({

  'Name': '全公司',
  'ID': '112',
  'Code': '001',
  'Children|100': [
    {
      'id|+1': 1,
      name: '@cname',
      nickName: '@last',
      phone: /^1[34578]\d{9}$/,
      'age|11-99': 1,
      address: '@county(true)',
      isMale: '@boolean',
      email: '@email',
      createTime: '@datetime',
      avatar () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.nickName.substr(0, 1))
      },
    },

  ],
}))

let deptTreeData = global[dataKey]

module.exports = {

  'GET /api/deptTree' (req, res) {

    res.json({success: true, data: deptTreeData})
  }

}
