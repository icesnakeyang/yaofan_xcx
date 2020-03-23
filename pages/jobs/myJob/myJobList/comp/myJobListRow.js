// pages/jobs/myJob/myJobList/comp/myJobListRow.js
import tools from '../../../../../utils/dateTools.js'

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        task:Object,
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
        endTime:{
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
          let endTime = ''
          if (this.data.endTime) {
              endTime = tools.momentTime(this.data.endTime, 'L')
        }
        this.setData({
            endTime
        })
      },
        onRow() {
            wx.setStorageSync('taskId', this.data.task.taskId)
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
      this.updateData()
    }
  }
})
