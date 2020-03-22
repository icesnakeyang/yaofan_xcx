// pages/team/teamHome/teamHome.js
import api from '../../../api/api.js'
import common from '../../../utils/common.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    isLoading: true,
    pageIndex:1,
    pageSize:5,
    teamList:[]
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
    if(!this.data.isLogin){
      wx.navigateTo({
        url: '/pages/legacy/login/login',
      })
      return
    }
    this.loadAllData()
  },

  loadAllData(){
    let params={
      pageIndex:this.data.pageIndex,
      pageSize:this.data.pageSize
    }
    api.apiListMyTeam(params).then((res)=>{
      console.log(res)
      this.setData({
        teamList:res.data.teams
      })
    }).catch((error)=>{
      wx.showToast({
        title: '读取数据失败',
        icon:'none'
      })
    })
  },


  onSearchChange(e) {
    console.log(e.detail)
  },

  onSearch() {
    console.log('search')
  },


  onCreateTeam(){
    wx.navigateTo({
      url: '../createTeam/createTeam',
    })
  },

  onTeamRow(e){
    wx.setStorageSync('teamId', e.currentTarget.dataset.teamid)
    wx.navigateTo({
      url: '../teamDetail/teamDetail',
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