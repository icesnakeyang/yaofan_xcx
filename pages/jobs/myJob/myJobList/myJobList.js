// pages/jobs/myJob/myJobList/myJobList.js
import api from '../../../../api/api.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadAllData()
  },

  loadAllData() {
    api.apiListMyTasks({}).then((res) => {
      console.log(res)
      this.setData({
        jobs:res.data.tasks
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取我的任务失败',
        icon: 'none'
      })
    })
  },

  onNewJob() {
    wx.navigateTo({
      url: '../../createJob/createJob',
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