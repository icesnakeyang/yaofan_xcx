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
    detail: '',
    teamId:'',
    teamName:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.removeStorageSync('endDateTime')
    let now = new Date()
    let endDate = tools.momentTime(now, 'S')
    let endTime = tools.momentTime(now, 'TIME')
    this.setData({
      endDate: endDate,
      endTime: endTime
    })
  },

  onTitle(e) {
    this.setData({
      title: e.detail
    })
  },

  onDetail(e) {
    this.setData({
      detail: e.detail.html
    })
  },

    onRemark(e){
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
    if(!this.data.teamId){
      wx.showToast({
        title: '请选择团队',
        icon:'none'
      })
      return
    }
    if (!this.data.title){
      wx.showToast({
        title: '请输入任务标题',
        icon:'none'
      })
      return
    }
    if (!this.data.detail){
      wx.showToast({
        title: '请输入任务详情',
        icon:'none'
      })
      return
    }
    let params = {
      title: this.data.title,
      point: this.data.point,
      detail: this.data.detail,
      endDateWx: this.data.endDate,
      endTimeWx: this.data.endTime,
      teamId:this.data.teamId
    }


    api.apiCreateTask(params).then((res) => {
      wx.showToast({
        title: '创建成功'
      })
      wx.switchTab({
        url: '/pages/jobs/myJob/myJobList/myJobList',
      })
    }).catch((error) => {
      Notify(MsgBox.showMsg(error));
    })
  },

  onSelectTeam() {
    let data = {
      date: this.data.endDate,
      time: this.data.endTime
    }
    // wx.setStorageSync('endDateTime', data)
    wx.navigateTo({
      url: './selectTeam/selectTeam',
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
    let teamId = wx.getStorageSync('selectedTeamId')
    let teamName = wx.getStorageSync('selectedTeamName')
    let endDateTime = wx.getStorageSync('endDateTime')
    if (endDateTime) {
      this.setData({
        endDate: endDateTime.date,
        endTime: endDateTime.time
      })
    } else {}
    if(teamId){
      this.setData({
        teamId,
        teamName
      })
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
