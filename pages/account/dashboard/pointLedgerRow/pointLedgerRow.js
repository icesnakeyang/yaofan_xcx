// pages/account/dashboard/pointLedgerRow/pointLedgerRow.js

import tools from '../../../../utils/dateTools.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    theData: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    createTime: '',
    point: 0,
    isIn: false,
    isOut: false,
    type: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateData() {
      let createTime = tools.momentTime(this.data.theData.createTime, 'S')
      let point = 0
      let isIn = false
      let isOut = false
      if (this.data.theData.pointIn) {
        point = this.data.theData.pointIn
        isIn = true
      } else {
        if (this.data.theData.pointOut) {
          point = this.data.theData.pointOut
          isOut = true
        }
      }
      let type = ''
      if (this.data.theData.actType === 'GRAB') {
        type = '抢单成功'
      }
      if (this.data.theData.actType === 'DEAL') {
        type = '任务支出'
      }
      if (this.data.theData.actType === 'STOP_TASK') {
        type = '任务终止'
      }
      this.setData({
        createTime,
        point,
        isIn,
        isOut,
        type
      })
    }
  },

  attached() {
    this.updateData()
  },

  observers: {
    'theData': function(data) {
      this.updateData()
    }
  }
})