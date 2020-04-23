// pages/jobs/myJob/complete/completeList/completeList.js

import api from '../../../../../api/api.js'
import Dialog from '../../../../../vant-weapp/dialog/dialog.js';
import Notify from '../../../../../vant-weapp/notify/notify.js';
import MsgShow from '../../../../../utils/msgBox/msgBox.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    task: {},
    taskCompletes: [],
    isEmpty: true,
    remark: '',
    taskId: '',
    taskStatus: '',
    isComplete: false,
    isProgress: false,
    isPartyA: false,
    isPartyB: false,
    isEdit: false
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
      let taskStatus = ''
      let isComplete = false
      let isProgress = false
      let isPartyA = false
      let isPartyB = false
      let isEdit = true
      let meId = wx.getStorageSync('current_user_id')
      if (res.data.task.createUserId === meId) {
        isPartyA = true
      } else {
        if (res.data.task.partyBId === meId) {
          isPartyB = true
        }
      }
      if (res.data.task.status === 'PROGRESS') {
        taskStatus = '进行中'
        isProgress = true
      } else {
        if (res.data.task.status === 'COMPLETE') {

          taskStatus = '已完成',
            isComplete = true
        } else {
          if (res.data.task.status === 'STOP') {
            taskStatus = '已终止'
            if (res.data.task.createUserId === meId) {
              //甲方
            } else {
              isEdit = false
            }
          }
        }
      }
      this.setData({
        task: res.data.task,
        taskStatus,
        isProgress,
        isComplete,
        isPartyA,
        isPartyB,
        isEdit
      })
      api.apiListTaskComplete(params).then((res) => {
        let isEmpty = false
        if (res.data.taskCompletes.length === 0) {
          isEmpty = true
        }
        this.setData({
          taskId,
          isEmpty,
          taskCompletes: res.data.taskCompletes,
          isLoading: false
        })
      }).catch((error) => {
        wx.showToast({
          title: '读取日志失败',
          icon: 'none'
        })
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取任务信息失败',
        icon: 'none'
      })
    })
  },

  onRemark(e) {
    this.setData({
      remark: e.detail.html
    })
  },

  onCreateComplete() {
    if (!this.data.remark) {
      Notify('请输入完成说明');
      return
    }
    let params = {
      taskId: this.data.taskId,
      content: this.data.remark
    }
    Dialog.confirm({
      message: '确认完成'
    }).then(() => {
      api.apiCreateComplete(params).then((res) => {
        wx.showToast({
          title: '任务已经完成'
        })
        this.loadAllData()
      }).catch((error) => {
        Notify(MsgShow.showMsg(error))
      })
    }).catch(() => {

    })
  },

  onCancelComplete() {
    let params = {
      taskId: this.data.task.taskId,
      content: this.data.remark
    }
    api.apiCancelComplete(params).then((res) => {
      wx.showToast({
        title: '取消完成成功'
      })
      this.loadAllData()
    }).catch((error) => {})
  },

  onRejectComplete() {
    let params = {
      taskId: this.data.taskId,
      content: this.data.remark
    }
    api.apiRejectComplete(params).then((res) => {
      wx.showToast({
        title: '拒绝任务完成成功'
      })
      this.loadAllData()
    }).catch((error) => {
      wx.showToast({
        title: '拒绝完成失败',
        icon: 'none'
      })
    })
  },

  onStopComplete() {
    if (!this.data.remark) {
      Notify('请输入处理说明')
      return
    }
    let params = {
      taskId: this.data.taskId,
      remark: this.data.remark
    }
    api.apiStopTask(params).then((res) => {
      wx.showToast({
        title: '终止任务成功'
      })
      this.loadAllData()
    }).catch((error) => {
      Notify(MsgShow.showMsg(error))
    })
  },

  onAcceptComplete() {
    let params = {
      taskId: this.data.task.taskId,
      content: this.data.remark
    }
    api.apiAcceptComplete(params).then((res) => {
      wx.showToast({
        title: '验收成功'
      })
      this.loadAllData()
    }).catch((error) => {
      wx.showToast({
        title: '验收失败',
        icon: 'none'
      })
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
