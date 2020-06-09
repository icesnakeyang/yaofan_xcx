// pages/account/ledgerList/ledgerList.js

import api from '../../../api/api.js'
import tools from '../../../utils/dateTools'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex: 1,
    pageSize: 10,
    ledgerList: [],
    show: false,
    startDate: '',
    startDateStr: '',
    endDate: '',
    endDateStr: '',
    showStartDate: false,
    showEndDate: false,
    minDate: new Date(2020, 0, 1).getTime(),
    defaultDate: new Date().getTime(),
    maxDate: new Date().getTime(),
    totalLedgerPage:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadAllData()
    let maxDate=tools.getNextYear(this.data.defaultDate).getTime()
    this.setData({
      maxDate
    })
  },

  loadAllData() {
    wx.showLoading({
      title: '加载中...',
    })
    let params = {
      pageIndex: this.data.pageIndex,
      pageSize: this.data.pageSize,
      startDate:this.data.startDate,
      endDate:this.data.endDate
    }
    console.log(params)
    api.apiListMyPointLedger(params).then((res) => {
      console.log(res)
      this.setData({
        ledgerList: res.data.pointLedgers,
        totalLedgerPage:res.data.pointLedgerTotalPage
      })
      wx.hideLoading()
    }).catch((error) => {
      wx.showToast({
        title: '读取账户信息失败',
        icon: 'none'
      })
    })
  },

  onLedgerRow(e) {
    wx.setStorageSync('taskId', e.currentTarget.dataset.taskid)
    wx.navigateTo({
      url: '/pages/jobs/jobDetail/jobDetail',
    })
  },

  onSelectStartDate() {
    this.setData({
      showCalendar: true,
      showStartDate: true,
      showEndDate: false
    });
  },

  onSelectEndDate() {
    this.setData({
      showCalendar: true,
      showEndDate: true,
      showStartDate: false
    })
  },

  onConfirmCalendar(event) {
    console.log(event.detail)
    if (this.data.showStartDate) {
      this.setData({
        showCalendar: false,
        startDate: event.detail,
        startDateStr: tools.momentTime(event.detail, 'S')
      })
    } else {
      if (this.data.showEndDate) {
        this.setData({
          showCalendar: false,
          endDate: event.detail,
          endDateStr: tools.momentTime(event.detail, 'S'),
        })
      }
    }
    console.log(this.data)
  },

  onCloseCalendar() {
    this.setData({
      showCalendar: false
    })
  },

  onSearch(){
    if(this.data.pageIndex>1){
      this.setData({
        pageIndex:1
      })
    }
    this.loadAllData()
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
    let page=this.data.pageIndex
    if(page>1){
      wx.showLoading({
        title: '加载中...',
      })
      page--
      this.setData({
        pageIndex:page
      })
      this.loadAllData()
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let pageIndex=this.data.pageIndex
    if(pageIndex<this.data.totalLedgerPage){
      wx.showLoading({
        title: '加载中...',
      })
      pageIndex++
      this.setData({
        pageIndex
      })
      this.loadAllData()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})