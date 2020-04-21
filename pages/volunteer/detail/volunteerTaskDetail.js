// pages/volunteer/detail/volunteerTaskDetail.js

import api from '../../../api/api.js'
import tools from '../../../utils/dateTools.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    volunteerTask: {},
    createTime: '',
    status: '',
    canApply: false,
    canComment: false,
    isAgree:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadAllData()
  },

  loadAllData() {
    let volunteerTaskId = wx.getStorageSync('volunteerTaskId')
    console.log(volunteerTaskId)
    let params = {
      volunteerTaskId
    }
    api.apiGetVolunteerTask(params).then((res) => {
      console.log(res)
      let createTime = tools.momentTime(res.data.volunteerTask.createTime, 'L')
      let status = ''
      let canApply = false
      let canComment = false
      let isAgree=false
      if (res.data.volunteerTask.status === 'ACTIVE') {
        status = '招募中'
        let currentUserId = wx.getStorageSync('current_user_id')
        if (res.data.volunteerTask.createUserId !== currentUserId) {
          if (res.data.canApply) {
            canApply = true
          }
        } else {
          canComment = true
        }
      }
      if(res.data.isAgree){
        isAgree=true
      }
      this.setData({
        volunteerTask: res.data.volunteerTask,
        createTime,
        isLoading: false,
        status,
        canApply,
        canComment,
        isAgree
      })
      console.log(this.data)

    }).catch((error) => {
      wx.showToast({
        title: '读取义工任务失败',
        icon: 'none'
      })
    })
  },

  onApply() {
    wx.setStorageSync('volunteerTaskId', this.data.volunteerTask.volunteerTaskId)
    wx.navigateTo({
      url: '../apply/applyVolunteerTask'
    })
  },

  onComment() {
    wx.setStorageSync('volunteerTaskId', this.data.volunteerTask.volunteerTaskId)
    wx.navigateTo({
      url: '../comment/volunteerList/volunteerList'
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