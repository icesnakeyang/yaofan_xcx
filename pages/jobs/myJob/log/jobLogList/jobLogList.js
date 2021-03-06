// pages/jobs/myJob/log/jobLogList/jobLogList.js

import api from '../../../../../api/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    taskLogs: [],
    isEmpty: false,
    logContent: '',
    taskId: '',
    isSaving: false,
    logContent2:'2',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadAllData()
  },

  loadAllData() {
    const taskId = wx.getStorageSync('taskId')
    let params = {
      taskId
    }
    api.apiListTaskLog(params).then((res) => {
      this.setData({
        taskLogs: res.data.taskLogs,
        isLoading: false,
        taskId
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取日志失败',
        icon: 'none'
      })
    })
  },

  onEditorInput(e) {
    this.setData({
      logContent: e.detail.html
    })
  },

  onCreateLog() {
    if (!this.data.logContent) {
      wx.showToast({
        title: '请输入日志内容',
        icon: 'none'
      })
      return
    }

    //检查日志内容是否与上次保存时相同，即避免重复保存日志
    if(this.data.logContent===this.data.logContent2){
      return
    }

    this.setData({
      logContent2:this.data.logContent
    })

    let params = {
      taskId: this.data.taskId,
      content: this.data.logContent
    }
    api.apiCreateTaskLog(params).then((res) => {
      wx.showToast({
        title: '创建任务日志成功'
      })
      this.loadAllData()
    }).catch((error) => {
      wx.showToast({
        title: '创建任务日志失败',
        icon: 'none'
      })
    })
  },

  onRow(e) {
    wx.setStorageSync('item', e.currentTarget.dataset.item)
    wx.navigateTo({
      url: '../logDetail/logDetail',
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
