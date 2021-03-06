// pages/jobs/createJob/endDate/endDate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'',
    time:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let endDateTime = wx.getStorageSync('endDateTime')
    this.setData({
      date:endDateTime.date,
      time:endDateTime.time
    })
  },

  bindDate(e){
    this.setData({
      date:e.detail.value
    })
  },

  bindTime(e){
    this.setData({
      time:e.detail.value
    })
  },

  onConfirm(){
    wx.setStorageSync('endDateTime', this.data)
    wx.navigateBack({

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
