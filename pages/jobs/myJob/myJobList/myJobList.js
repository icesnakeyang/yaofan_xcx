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
    catchTasks: [],
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
    this.loadDataFromApi().then((res)=>{
      this.loadAllData()
    })
  },

  /**
   * 从数据库读取数据
   */
  loadDataFromApi() {
    let params = {
      pageIndex: this.data.pageIndex,
      pageSize: this.data.pageSize,
      status:'PROGRESS'
    }
    return new Promise((resolve, reject) => {
      api.apiListMyTasksTiny(params).then((res) => {
        const catchTasks = res.data.tasks
        let isEmpty=true
        if(res.data.tasks.length>0){
          isEmpty=false
        }
        this.setData({
          catchTasks,
          isLoading: false,
          isEmpty,
          totalPage: res.data.totalPage,
          totalTasks: res.data.totalTasks
        })
        resolve()
      }).catch((error) => {
        reject(error)
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取我的任务失败',
        icon: 'none'
      })
    })
  },

  /**
   * 整理准备数据
   */
  loadAllData() {
    const catchTasks = this.data.catchTasks
    if (catchTasks.length === 0) {
      this.setData({
        isEmpty: true
      })
      return
    }

    if (catchTasks.length <= this.data.pageSize) {
      this.setData({
        jobs: catchTasks
      })
      return
    }

    const pageIndex = this.data.pageIndex
    const pageSize = this.data.pageSize
    const offset = (pageIndex - 1) * pageSize
    let tasks = []
    const offsize = offset + pageSize
    for (let i = offset; i < offsize; i++) {
      if (i < catchTasks.length) {
        tasks.push(catchTasks[i])
      }
    }
    this.setData({
      jobs: tasks,
    })
  },

  onNewJob() {
    wx.navigateTo({
      url: '../../createJob/createJob',
    })
  },

  onCurrentJob() {
    console.log(222)
    let params = {
      pageIndex:1,
      pageSize:100,
      status:'PROGRESS'
    }
    api.apiListMyTasksTiny(params).then((res) => {
      console.log(res)
      this.setData({
        jobs:res.data.tasks
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取任务失败',
        icon:'none'
      })
    })
  },

  /**
   * 查询我是甲方的任务
   */
  onPartyA() {
    this.setData({
      pageIndex:1
    })
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
      this.loadDataFromApi()
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
      this.loadDataFromApi()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})