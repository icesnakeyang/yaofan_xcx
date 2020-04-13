// pages/jobs/myJob/editJob/editJob.js

import api from '../../../../api/api.js'
import tools from '../../../../utils/dateTools.js'
import Notify from '../../../../vant-weapp/notify/notify.js';
import MsgBox from '../../../../utils/msgBox/msgBox.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskId: '',
    task: {},
    title: '',
    endDate: '',
    endTime: '',
    teamName: '',
    taskDetail: '',
    isLoading:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let taskId = wx.getStorageSync('taskId')
    console.log(taskId)
    this.setData({
      taskId
    })
    this.loadAllData()
  },

  loadAllData() {
    let params = {
      taskId: this.data.taskId
    }
    api.apiGetTaskByTaskId(params).then((res) => {
      let endDate = ''
      let endTime = ''
      if (res.data.task.endTime) {
        endDate = tools.momentTime(res.data.task.endTime, 'S')
        endTime = tools.momentTime(res.data.task.endTime, 'TIME')
      }
      this.setData({
        task: res.data.task,
        teamName: res.data.task.teamName,
        endDate,
        endTime,
        taskDetail: res.data.task.detail,
        point: res.data.task.point,
        title: res.data.task.title,
        isLoading:false
      })
      this.onEditorReady()
    }).catch((error) => {
      wx.showToast({
        title: '读取任务失败',
        icon: 'none'
      })
    })
  },

  onChangeTitle(e) {
    this.setData({
      title: e.detail
    })
  },

  onSelectTeam() {
    wx.navigateTo({
      url: '../../createJob/selectTeam/selectTeam',
    })
  },

  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(res => {
        console.log(res)
      that.editorCtx = res.context
      that.editorCtx.setContents({
        html: that.data.taskDetail
      })
    }).exec()
  },

  onEditorInput(e) {
    this.setData({
      taskDetail: e.detail.html
    })
  },

  onSave() {
    let params = {
      detail: this.data.taskDetail,
      title: this.data.title,
      endDateWx: this.data.endDate,
      endTimeWx: this.data.endTime,
      point: this.data.point,
      teamId: this.data.task.teamId,
      taskId: this.data.taskId
    }

    api.apiUpdateTask(params).then((res) => {
      wx.showToast({
        title: '保存成功'
      })
      wx.navigateTo({
        url: '/pages/jobs/jobDetail/jobDetail',
      })
    }).catch((error) => {
      Notify(MsgBox.showMsg(error));
    })
  },

  onEndDate() {
    let data = {
      date: this.data.endDate,
      time: this.data.endTime
    }
    wx.setStorageSync('endDateTime', data)
    wx.navigateTo({
      url: '../../createJob/endDate/endDate',
    })
  },

  onPoint(e){
    this.setData({
      point:e.detail
    })
  },

  onTitle(e){
    this.setData({
      title:e.detail
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.onEditorReady()
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
    if (teamId) {
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
