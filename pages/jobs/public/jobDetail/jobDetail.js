// pages/jobs/public/jobDetail/jobDetail.js
import api from '../../../../api/api.js'
import tools from '../../../../utils/dateTools.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    task: {},
    isLoading: true,
    endTime: '',
    isGrab: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadAllData()
  },

  loadAllData() {
    let taskId = wx.getStorageSync('taskId')
    let params = {
      taskId
    }
    api.apiGetTaskByTaskId(params).then((res) => {
      let endTime = ''
      if (res.data.task.endTime) {
        endTime = tools.momentTime(res.data.task.endTime, 'L')
      }
      let isGrab = false
      let createUserId = res.data.task.createUserId
      let currentUserId = wx.getStorageSync('current_user_id')
      if (res.data.task.status === 'GRABBING') {
        if (currentUserId !== createUserId) {
          isGrab = true
        }
      }
      this.setData({
        task: res.data.task,
        isLoading: false,
        endTime,
        isGrab
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取任务失败',
        icon: 'none'
      })
    })
  },

  onGrab() {
    let params = {
      taskId: this.data.task.taskId
    }
    api.apiGrab(params).then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})