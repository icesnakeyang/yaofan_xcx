// pages/jobs/transferJob/transferJob.js

import api from '../../../api/api.js'
import tools from '../../../utils/dateTools.js'
import Dialog from '../../../vant-weapp/dialog/dialog.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:true,
    task:{},
    createTime:'',
    newPoint:0,
    newTaskDetail:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadAllData()
  },

  loadAllData(){
    let taskId=wx.getStorageSync('taskId')
    let params={
      taskId
    }
    api.apiGetTaskByTaskId(params).then((res)=>{
      let createTime=tools.momentTime(res.data.task.createTime, 'L')
      let newPoint=res.data.task.point
      let newTaskDetail=res.data.task.detail
      this.setData({
        task:res.data.task,
        isLoading:false,
        createTime,
        newPoint,
        newTaskDetail
      })
    }).catch((error)=>{
    })
  },

  onPointChange(e){
    this.setData({
      newPoint:e.detail
    })
  },

  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(res => {
      that.editorCtx = res.context
      that.editorCtx.setContents({
        html: that.data.task.detail
      })
    }).exec()
  },

  onEditorInput(e){
    this.setData({
      newTaskDetail:e.detail.html
    })
  },

  onTransfer(){
    Dialog.confirm({
      title: '确认转移任务',
      message: '任务转移后将移动到任务广场，其他团队成员可继续承接该任务'
    }).then(() => {
      // on confirm
      let params={
        taskId:this.data.task.taskId,
        point:this.data.newPoint,
        detail:this.data.newTaskDetail
      }
      api.apiTransferTask(params).then((res)=>{
        wx.showToast({
          title: '已移交到任务广场'
        })
        wx.switchTab({
          url: '/pages/jobs/myJob/myJobList/myJobList'
        })
      }).catch((error)=>{
        wx.showToast({
          title: '移交任务失败',
          icon:'none'
        })
      })
    }).catch(() => {
      // on cancel
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})