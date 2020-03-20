// pages/legacy/home/home.js
import api from '../../../api/api.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
      userInfo:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.loadAllData()
    },

  loadAllData() {
    let token = wx.getStorageSync('yaofan_token')
    api.apiLoginByToken({}).then((res)=>{
      this.setData({
        userInfo:res.data.userInfo
      })
    }).catch((error)=>{
      console.log(error)
      wx.showToast({
          title: '读取数据失败',
          icon:'none'
      })
    })

    if (token) {
    } else {
      wx.navigateTo({
        url: '/pages/legacy/login/login',
      })
    }
  },

  onName(){
    wx.navigateTo({
      url: '../edit/name/name?name='+this.data.userInfo.name,
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
      this.loadAllData()
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