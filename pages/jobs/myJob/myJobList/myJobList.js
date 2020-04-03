// pages/jobs/myJob/myJobList/myJobList.js
import api from '../../../../api/api.js'
import common from '../../../../utils/common.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    jobs: [],
    pageIndex: 1,
    pageSize: 10,
    isEmpty: true,
    totalPage: 0,
    totalTasks: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (common.isLogin()) {
      this.setData({
        isLogin: true
      })
    } else {
      this.setData({
        isLogin: false
      })
    }
    if (!this.data.isLogin) {
      wx.navigateTo({
        url: '/pages/legacy/login/login',
      })
      return
    }
    this.loadAllData()
  },

  loadAllData() {
    let params = {
      pageIndex: this.data.pageIndex,
      pageSize: this.data.pageSize
    }
    api.apiListMyTasks(params).then((res) => {
      console.log(res)
      let isEmpty = true
      if (res.data.tasks.length > 0) {
        isEmpty = false
      }
      this.setData({
        jobs: res.data.tasks,
        isLoading: false,
        isEmpty,
        totalPage: res.data.totalPage,
        totalTasks: res.data.totalTasks
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

  onTeamJob() {
    let params = {

    }
    api.apiListTaskGrabbingTeam(params).then((res) => {}).catch((error) => {})
  },

  /**
   * 查询我是甲方的任务
   */
  onPartyA() {
    this.setData({
      isLoading: true
    })
    let params = {
      pageIndex: this.data.pageIndex,
      pageSize: this.data.pageSize
    }
    api.apiListMyPartyATasksDetail(params).then((res) => {
      let isEmpty = false
      if (res.data.tasks.length === 0) {
        isEmpty = true
      }
      this.setData({
        jobs: res.data.tasks,
        isLoading: false,
        isEmpty
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取任务失败',
        icon: 'none'
      })
    })
  },

  /**
   * 查询我是乙方的任务
   */
  onPartyB() {
    this.setData({
      isLoading: true
    })
    let params = {
      pageIndex: this.data.pageIndex,
      pageSize: this.data.pageSize
    }
    api.apiListMyPartyBTasksDetail(params).then((res) => {
      let isEmpty = false
      if (res.data.tasks.length === 0) {
        isEmpty = true
      }
      this.setData({
        jobs: res.data.tasks,
        isLoading: false,
        isEmpty
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取任务失败',
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
    this.loadAllData()
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
    let page = this.data.pageIndex
    if (page > 1) {
      page--
      this.setData({
        pageIndex: page
      })
      this.loadAllData()
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    let page = this.data.pageIndex
    if (page < this.data.totalPage) {
      page++
      this.setData({
        pageIndex: page
      })
      this.loadAllData()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})