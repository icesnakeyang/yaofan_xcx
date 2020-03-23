// pages/jobs/myJob/myJobList/comp/myJobListRow.js
import tools from '../../../../../utils/dateTools.js'

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
          type:String,
          value:''
        },
        content:{
          type:String,
          value:''
        },
      point:{
          type:Number,
          value:0
        },
        createTime:{
          type:Date
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    /**
     * 组件的方法列表
     */
    methods: {
      updateData(){
        console.log(this.data)
        let createTime = ''
        if (this.data.createTime) {
          createTime = tools.momentTime(this.data.createTime, 'L')
        }
        this.setData({
          createTime
        })
        console.log(this.data)
      },
        onRow() {
            wx.setStorageSync('taskId', this.data.theData.task.taskId)
            wx.navigateTo({
                url: '../myJobDetail/myJobDetail',
            })
        }
    },

    attached() {
      this.updateData()
    },

  observers: {
    'title': function (title) {
      console.log(title)
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      
      console.log(this.data)
      this.updateData()
    }
  }
})
