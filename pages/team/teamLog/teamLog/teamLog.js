// pages/team/teamLog/teamLog/teamLog.js
import api from '../../../../api/api.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex:1,
    pageSize:10,
    teamApplyList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadAllData()
  },

  loadAllData(){
    let params={
      pageIndex:this.data.pageIndex,
      pageSize:this.data.pageSize
    }
    api.apiListTeamApplyLogMyApply(params).then((res)=>{
      console.log(res)
      this.setData({
        teamApplyList:res.data.applyTeams
      })
    }).catch((error)=>{
      wx.showToast({
        title: '读取团队日志失败',
        icon:'none'
      })
    })
  },

  onClickRow(e){
    console.log(e.currentTarget.dataset.itemid)
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