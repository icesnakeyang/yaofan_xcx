// pages/team/teamLog/teamQuitLog/list/row/row.js

import tools from '../../../../../../utils/dateTools.js'

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
    createTime:'',
    status:'',
    isCancel:false,
    isPending:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateData() {
      console.log(this.data.theData)
      let createTime = ''
      if (this.data.theData.createTime) {
        createTime = tools.momentTime(this.data.theData.createTime, 'L')
      }
      let status=''
      let isCancel=false
      let isPending=false
      if(this.data.theData.status==='PENDING'){
        status='等待处理'
        isPending=true
      }else{
        if(this.data.theData.status==='CANCEL'){
          status='已取消'
          isCancel=true
        }
      }
      this.setData({
        createTime,
        status,
        isCancel,
        isPending
      })
    }
  },

  attached() {
    this.updateData()
  },

  observers: {
    'theData': function(theData) {
      this.updateData()
    }
  }
})