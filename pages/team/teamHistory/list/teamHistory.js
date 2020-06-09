// pages/team/teamHistory/teamHistory.js

import api from '../../../../api/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex:1,
    pageSize:10,
    teamList:[],
    isEmpty:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadAllData()
  },

  loadAllData(){
    wx.showLoading({
      title: '加载中...',
    })
    const params={
      pageIndex:this.data.pageIndex,
      pageSize:this.data.pageSize
    }

    api.apiListMyHistoryTeam(params).then((res)=>{
      let isEmpty=true
      if(res.data.historyTeams>0){
        isEmpty=false
      }
      this.setData({
        teamList:res.data.historyTeams,
        isEmpty
      })
      wx.hideLoading()
    }).catch((error)=>{
      wx.showToast({
        title:'读取历史团队记录失败',
        icon:'none'
      })
    })
  },

  onTeamRow(e){
    const teamId=e.currentTarget.dataset.teamid
    wx.setStorageSync('historyTeamId', teamId)
    wx.navigateTo({
      url: '../detail/teamHistoryDetail',
    })
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