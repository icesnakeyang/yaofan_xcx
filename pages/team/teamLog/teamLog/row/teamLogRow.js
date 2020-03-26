// pages/team/teamLog/teamLog/row/teamLogRow.js

import tools from '../../../../../utils/dateTools.js'

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
    status:'',
    createTime:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateData(){
      let status=this.data.theData.status
      if (status==='PENDING'){
        status='等待通过'
      }
      let createTime=''
      if (this.data.theData.createTime){
        createTime=tools.momentTime(this.data.theData.createTime, 'L')
      }
      this.setData({
        status,
        createTime
      })
    }
  },

  attached(){
    this.updateData()
  },

  observers:{
    'theData':function(data){
      this.updateData()
    }
  }
})
