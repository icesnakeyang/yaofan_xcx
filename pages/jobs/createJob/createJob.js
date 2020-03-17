// pages/jobs/createJob/createJob.js
import tools from '../../../utils/dateTools.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    endDate: '',
    endTime: '',
    point: 0,
    detail: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.removeStorageSync('endDateTime')
    let now=new Date()
    let endDate=tools.momentTime(now, 'L')
    let endTime = tools.momentTime(now, 'TIME')
    this.setData({
      endDate,
      endTime
    })
    console.log(this.data)
  },

  onTitle(e) {
    this.setData({
      title: e.detail
    })
  },

  onDetail(e) {
    this.setData({
      detail: e.detail
    })
  },

  onPoint(e) {
    this.setData({
      point: e.detail
    })
  },

  onEndDate() {
    let data = {
      date: this.data.endDate,
      time: this.data.endTime
    }
    console.log(this.data)
    wx.setStorageSync('endDateTime', data)
    wx.navigateTo({
      url: './endDate/endDate',
    })
  },

  onSave() {
    let params = {
      title: this.data.title,
      point: this.data.point,
      detail: this.data.detail,
      endDate: this.data.endDate,
      endTime: this.data.endTime
    }
    console.log(params)
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
    let endDateTime = wx.getStorageSync('endDateTime')
    this.setData({
      endDate: endDateTime.date,
      endTime: endDateTime.time
    })
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