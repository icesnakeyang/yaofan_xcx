// pages/team/teamApplyLogList/row/row.js

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
    status: '',
    isPending: false,
    isReject: false,
    isAgree: false,
    isCancel: false,
    isNew: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateData() {
      let createTime = tools.momentTime(this.data.theData.createTime, 'L')
      let status = ''
      let isPending = false
      let isReject = false
      let isAgree = false
      let isCancel = false
      if (this.data.theData.status === 'PENDING') {
        status = '等待通过',
          isPending = true
      } else {
        if (this.data.theData.status === 'REJECT') {
          status = '已拒绝'
          isReject = true
        } else {
          if (this.data.theData.status === 'AGREE') {
            status = '已通过'
            isAgree = true
          } else {
            if (this.data.theData.status === 'CANCEL') {
              status = '已取消'
              isCancel = true
            }
          }
        }
      }
      let isNew = false
      const currentUserId = wx.getStorageSync('current_user_id')

      //我是申请人
      if (this.data.theData.applyUserId === currentUserId) {
        if (this.data.theData.processTime) {
          if (!this.data.theData.processReadTime) {
            isNew=true
          }
        }
      }else{
        if(this.data.theData.teamManagerId===currentUserId){
          //我是组长
          if(!this.data.theData.readTime){
            isNew=true
          }
        }
      }

      this.setData({
        createTime,
        status,
        isPending,
        isReject,
        isAgree,
        isCancel,
        isNew
      })
    }
  },

  attached() {
    this.updateData()
  },

  observers: {
    'theData': function (data) {
      this.updateData()
    }
  }
})
