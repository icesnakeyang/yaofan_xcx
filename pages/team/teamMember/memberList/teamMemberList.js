// pages/team/teamMember/memberList/teamMemberList.js

import api from '../../../../api/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:true,
    memberList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadAllData()
  },

  loadAllData() {
    const teamId = wx.getStorageSync('teamId')
    const params = {
      teamId
    }
    api.apiListMyTeamMember(params).then((res) => {
      console.log(res)
      this.setData({
        memberList:res.data.teamUsers,
        isLoading:false
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取团队成员信息失败',
        icon: 'none'
      })
    })
  },

  onMemberRow(e){
    const userId=e.currentTarget.dataset.userid
    wx.setStorageSync('userId', userId)
    wx.navigateTo({
      url: '../memeberDetail/memberDetail',
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