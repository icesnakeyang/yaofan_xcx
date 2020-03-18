// pages/jobs/createJob/createJob.js
import api from '../../../api/api.js'
import tools from '../../../utils/dateTools.js'
import Notify from '../../../vant-weapp/notify/notify.js';
import MsgBox from '../../../utils/msgBox/msgBox.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    endDate: '',
    endTime: '',
    point: 50,
    detail: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('load')
    wx.removeStorageSync('endDateTime')
    let now = new Date()
    let endDate = tools.momentTime(now, 'S')
    let endTime = tools.momentTime(now, 'TIME')
    this.setData({
      endDate: endDate,
      endTime: endTime
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
      endDateWx: this.data.endDate,
      endTimeWx: this.data.endTime
    }
    console.log(params)
    api.apiCreateTask(params).then((res) => {
      console.log(res)
      wx.showToast({
        title: '创建成功'
      })
      wx.switchTab({
        url: '/pages/jobs/myJob/myJobList/myJobList',
      })
    }).catch((error) => {
      console.log(error)
      Notify(MsgBox.showMsg(error));
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
    console.log('show')
    let endDateTime = wx.getStorageSync('endDateTime')
    console.log(endDateTime)
    if (endDateTime) {
      this.setData({
        endDate: endDateTime.date,
        endTime: endDateTime.time
      })
    } else {
      console.log(2)
    }
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