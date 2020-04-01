// pages/jobs/public/jobDetail/jobDetail.js
import api from '../../../api/api.js'
import tools from '../../../utils/dateTools.js'
import Dialog from '../../../vant-weapp/dialog/dialog.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    task: {},
    isLoading: true,
    endTime: '',
    isGrab: false,
    isEdit: false,
    status: '',
    isProgress:false,
    totalLog:0,
    isNewLog:false
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
      let isEdit = false
      let createUserId = res.data.task.createUserId
      let currentUserId = wx.getStorageSync('current_user_id')
      let status = ''
      let isProgress=false
      if (res.data.task.status === 'GRABBING') {
        status = '等待匹配'
        if (currentUserId === createUserId) {
          isEdit = true
        } else {
          isGrab = true
        }
      }
      if (res.data.task.status ==='PROGRESS'){
        status='进行中'
        isProgress=true
      }
      this.setData({
        task: res.data.task,
        isLoading: false,
        endTime,
        isGrab,
        isEdit,
        status,
        isProgress
      })
      console.log(this.data)
    }).catch((error) => {
      wx.showToast({
        title: '读取任务失败',
        icon: 'none'
      })
    })
  },

  onGrab() {
    Dialog.confirm({
      message: '确定要做改任务吗？'
    }).then(() => {
      let params = {
        taskId: this.data.task.taskId
      }
      api.apiGrab(params).then((res) => {
        console.log(res)
        wx.showToast({
          title: '抢单成功'
        })
        this.loadAllData()
      }).catch((error) => {
        console.log(error)
        wx.showToast({
          title: '抢单失败',
          icon: 'none'
        })
      })
    }).catch(()=>{

    })
  },

  editTask() {
    wx.setStorageSync('taskId', this.data.taskId)
    wx.navigateTo({
      url: '../myJob/editJob/editJob'
    })
  },

  deleteTask() {
    Dialog.confirm({
      title: '确认删除',
      message: '确定要删除该任务吗？'
    }).then(() => {
      // on confirm
    }).catch(() => {
      // on cancel
    });
  },

  onGoLog(){
    const taskId = this.data.task.taskId
    console.log(taskId)
    wx.setStorageSync('taskId', this.data.task.taskId)
    wx.navigateTo({
      url: '/pages/jobs/myJob/log/jobLogList/jobLogList',
    })
  },

  onComplete(){

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