// pages/account/dashboard/dashboard.js

import api from '../../../api/api.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    pageIndex: 1,
    pageSize: 10,
    pointLedgerList: [],
    totalPointIn: 0,
    totalPointOut: 0,
    totalPointBalance: 0,
    totalWithdrawAble: 0,
    isEmpty: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadAllData()
  },

  loadAllData() {
    let params = {
      pageIndex: this.data.pageIndex,
      pageSize: this.data.pageSize
    }
    api.apiListMyPointLedger(params).then((res) => {
      let isEmpty = false
      if (res.data.pointLedgers.length === 0) {
        isEmpty = true
      }
      this.setData({
        pointLedgerList: res.data.pointLedgers,
        isEmpty
      })
      api.apiTotalUserPoint(params).then((res) => {
        this.setData({
          totalPointIn: res.data.pointIn,
          totalPointOut: res.data.pointOut,
          totalPointBalance: res.data.pointBalance,
          isLoading: false,
          totalWithdrawAble: res.data.withdrawAble
        })
      }).catch((error) => {
        wx.showToast({
          title: '读取积分失败',
          icon: 'none'
        })
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取积分失败',
        icon: 'none'
      })
    })
  },

  onLedgerDetail() {
    wx.navigateTo({
      url: '/pages/account/ledgerList/ledgerList',
    })
  },

  onWithdraw() {
    wx.navigateTo({
      url: '/pages/account/withdraw/withdraw'
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
