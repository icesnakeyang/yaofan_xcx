// pages/legacy/register/register.js
import api from '../../../api/api.js'
import Notify from '../../../vant-weapp/notify/notify.js';
import MsgBox from '../../../utils/msgBox/msgBox.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:'',
    password2:'',
    username:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  onLogin() {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  onRegister(){
    if(!this.data.phone){
      wx.showToast({
        title: '请输入手机号码',
        icon:'none'
      })
      return
    }
    if(!this.data.password){
      wx.showToast({
        title: '请输入密码',
        icon:'none'
      })
      return
    }
    if(!this.data.username){
      wx.showToast({
        title: '请输入您的真实姓名',
        icon:'none'
      })
      return
    }
    if(this.data.password!==this.data.password2){
      wx.showToast({
        title: '密码不一致',
        icon:'none'
      })
      return
    }
    let params={
      phone:this.data.phone,
      password:this.data.password,
      username:this.data.username
    }
    api.apiRegister(params).then((res)=>{
      console.log(res)
      wx.setStorageSync('yaofan_token', res.data.userInfo.token)
      wx.switchTab({
        url: '/pages/legacy/home/home',
      })
    }).catch((error)=>{
      console.log(error)
      Notify(MsgBox.showMsg(error));
      wx.showToast({
        title: '注册失败',
        icon:'none'
      })
    })
  },

  onPhone(e){
    this.setData({
      phone:e.detail
    })
  },

  onPassword(e){
    this.setData({
      password: e.detail
    })
  },

  onPassword2(e){
    this.setData({
      password2: e.detail
    })
  },

  onName(e){
    this.setData({
      username: e.detail
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