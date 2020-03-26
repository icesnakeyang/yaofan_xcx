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
    teamList:[],
    searchKey:'',
    totalNewApplyMember:''
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
      this.setData({
        teamList:res.data.teams
      })
    }).catch((error)=>{
      wx.showToast({
        title: '读取数据失败',
        icon:'none'
      })
    })

    /**
     * 统计未读的团队申请人数
     */
      api.apiTotalNewApplyMember({}).then((res)=>{
          console.log(res)
        let totalNewApplyMember=''
        if (res.data.totalNewApplyMember>0){
          totalNewApplyMember = res.data.totalNewApplyMember
        }
          this.setData({
            totalNewApplyMember
          })
      }).catch((error)=>{

      })
  },


  onSearchChange(e) {
    this.setData({
      searchKey:e.detail
    })
  },

  onSearch() {
    console.log(this.data.searchKey)
    let params={
      name:this.data.searchKey
    }
    api.apiSearchTeam(params).then((res)=>{
      console.log(res)
      if(res.data.teams.length===0){
        wx.showToast({
          title: '没有搜索到团队',
          icon:'none'
        })
      }else{
        this.setData({
          teamList:res.data.teams
        })
      }
    }).catch((error)=>{
      wx.showToast({
        title: '搜索团队失败',
        icon:'none'
      })
    })
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
   * 申请加入我的团队的申请列表
   */
  onApplyMemberList(){
      wx.setStorageSync('type', join)
    wx.navigateTo({
      url: '/pages/team/teamApplyLogList/teamApplyLogList',
    })
  },

  /**
   * 我申请加入的团队的申请列表
   */
  onTeamLog(){
      wx.setStorageSync('type', 'apply')
    wx.navigateTo({
      url: '/pages/team/teamApplyLogList/teamApplyLogList',
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
