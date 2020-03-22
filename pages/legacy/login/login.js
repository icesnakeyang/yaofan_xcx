// pages/legacy/login/login.js
import api from '../../../api/api.js'
import Notify from '../../../vant-weapp/notify/notify.js';
import MsgBox from '../../../utils/msgBox/msgBox.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  onPhone(e) {
    this.setData({
      phone: e.detail
    })
  },

  onPassword(e) {
    this.setData({
      password: e.detail
    })
  },

  onRegister() {
    wx.navigateTo({
      url: '../register/register',
    })
  },

  onLogin() {
    let params = {
      phone: this.data.phone,
      password: this.data.password
    }
    api.apiLogin(params).then((res) => {
      wx.setStorageSync('yaofan_token', res.data.userInfo.token)
      wx.setStorageSync('current_user_id', res.data.userInfo.userId)
      wx.switchTab({
        url: '/pages/legacy/home/home',
      })
    }).catch((error) => {
      Notify(MsgBox.showMsg(error));
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
