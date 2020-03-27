// pages/team/teamApplyLogList/row/row.js

import tools from '../../../../utils/dateTools.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    theData:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
      createTime:'',
      status:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
      updateData(){
          console.log(this.data)
          let createTime=tools.momentTime(this.data.theData.createTime, 'L')
          let status=''
          if(this.data.theData.status==='PENDING'){
              status='等待通过'
          }
          this.setData({
              createTime,
              status
          })
      }
  },

  attached(){
      this.updateData()
  }
})
