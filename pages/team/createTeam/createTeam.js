// pages/team/createTeam/createTeam.js
import api from '../../../api/api.js'
import Notify from '../../../vant-weapp/notify/notify.js';
import MsgBox from '../../../utils/msgBox/msgBox.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    description:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  onTeamName(e){
    this.setData({
      name:e.detail
    })
  },

  onDetail(e){
    this.setData({
      description: e.detail.html
    })
  },

  onCreateTeam(){
    let params = {
      name: this.data.name,
      description: this.data.description
    }
    api.apiCreateTeam(params).then((res) => {
      wx.showToast({
        title: '创建团队成功'
      })
      wx.switchTab({
        url: '/pages/team/teamHome/teamHome'
      })
    }).catch((error) => {
      Notify(MsgBox.showMsg(error));
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
