// pages/jobs/myJob/log/logDetail/logDetail.js

import api from '../../../../../api/api.js'
import Dialog from '../../../../../vant-weapp/dialog/dialog.js';
import tools from '../../../../../utils/dateTools.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:true,
    log:{},
    createTime:'',
    readTime:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadAllData()
  },

  loadAllData(){
    let item=wx.getStorageSync('item')
    let createTime=tools.momentTime(item.createTime, 'L')
    let readTime='未阅读'
    if (item.readTime){
      readTime=tools.momentTime(item.readTime, 'L')
    }
    this.setData({
      log:item,
      isLoading:false,
      createTime,
      readTime
    })
  },

  onDelete() {
    Dialog.confirm({
      message: '确认要删除该日志吗'
    }).then(() => {
      // on confirm
      let params={
        taskLogId: this.data.log.taskLogId
      }
      api.apiDeleteTaskLog(params).then((res)=>{
        wx.showToast({
          title: '删除成功'
        })
        wx.navigateTo({
          url: '../jobLogList/jobLogList'
        })
      }).catch((error)=>{
        wx.showToast({
          title: '删除失败',
          icon:'none'
        })
      })
    }).catch(() => {
      // on cancel
    });
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