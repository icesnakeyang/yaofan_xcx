// pages/volunteer/create/createVolunteerTask.js

import api from '../../../api/api.js'
import Notify from '../../../vant-weapp/notify/notify.js'
import ShowMsg from '../../../utils/msgBox/msgBox.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    content:'',
    date:'',
    time:'',
    isSaving:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onTitle(e){
    this.setData({
      title:e.detail
    })
  },

  onEditorInput(e){
    this.setData({
      content:e.detail.html
    })
  },

  bindDate(e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindTime(e) {
    this.setData({
      time: e.detail.value
    })
  },

  onCreate(){
    if(!this.data.content){
      Notify('请输入任务详情')
      return
    }
    if(!this.data.title){
      Notify('请输入任务标题')
      return
    }
    if(!this.data.date){
      Notify('请输入任务日期')
      return
    }
    if(!this.data.time){
      Notify('请输入任务时间')
      return
    }
    console.log(this.data)
    let params={
      content:this.data.content,
      title:this.data.title,
      theDate:this.data.date,
      theTime:this.data.time
    }

    this.setData({
      isSaving:true
    })

    api.apiCreateVolunteerTask(params).then((res)=>{
      console.log(res)
      wx.showToast({
        title: '创建成功'
      })
      wx.navigateTo({
        url: '/pages/volunteer/volunteerTaskList/volunteerTaskList',
      })
    }).catch((error)=>{
      wx.showToast({
        title: '创建任务失败',
        icon:'none'
      })
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