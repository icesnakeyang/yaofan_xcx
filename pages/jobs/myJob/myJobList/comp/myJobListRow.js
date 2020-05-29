// pages/jobs/myJob/myJobList/comp/myJobListRow.js
import tools from '../../../../../utils/dateTools.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    task: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    endTime: '',
    status: '',
    isGrabbing: false,
    isProgress: false,
    isComplete: false,
    isStop: false,
    isTransferred: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateData() {
      console.log(this.data.task)
      let endTime = ''
      if (this.data.task.endTime) {
        endTime = tools.momentTime(this.data.task.endTime, 'L')
      }
      let status = ''
      let isGrabbing = false
      let isProgress = false
      let isComplete = false
      let isStop = false
      let isTransferred = false
      if (this.data.task.status === 'GRABBING') {
        status = '等待抢单'
        isGrabbing = true
      } else {
        if (this.data.task.status === 'PROGRESS') {
          status = '进行中'
          isProgress = true
        } else {
          if (this.data.task.status === 'COMPLETE') {
            status = '已完成'
            isComplete = true
          } else {
            if (this.data.task.status === 'STOP') {
              status = '已终止'
              isStop = true
            } else {
              if (this.data.task.status === 'TRANSFERRED') {
                status = '已转移'
                isTransferred = true
              }
            }
          }
        }
      }
      this.setData({
        endTime,
        status,
        isGrabbing,
        isProgress,
        isComplete,
        isStop,
        isTransferred
      })
    },
    onRow() {
      wx.setStorageSync('taskId', this.data.task.taskId)
      wx.navigateTo({
        url: '../../jobDetail/jobDetail',
      })
    }
  },

  attached() {
    this.updateData()
  },

  observers: {
    'task': function(task) {
      this.updateData()
    }
  }
})