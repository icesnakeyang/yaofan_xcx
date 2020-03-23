// pages/jobs/createJob/selectTeam/selectTeam.js
import api from '../../../../api/api.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamList: [],
    pageIndex: 1,
    pageSize: 5,
    isLoading: true,
    teamId: '',
    teamName: ''
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
    api.apiListMyTeam(params).then((res) => {
      this.setData({
        teamList: res.data.teams,
        isLoading: false
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取团队列表失败',
        icon: 'none'
      })
    })
  },

  onTeamRow(e) {
    let teamId = e.currentTarget.dataset.teamid
    let teamName = e.currentTarget.dataset.teamname
    wx.setStorageSync('selectedTeamId', teamId)
    wx.setStorageSync('selectedTeamName', teamName)
    wx.navigateBack({

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
