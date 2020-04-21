// pages/volunteer/volunteerTaskList/volunteerTaskList.js

import api from '../../../api/api.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
      isLoading:true,
      pageIndex:1,
      pageSize:10,
      volunteerTaskList:[]
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
      api.apiListVolunteerTask(params).then((res)=>{
          console.log(res)
          this.setData({
              volunteerTaskList:res.data.volunteerTasks,
              isLoading:false
          })
      }).catch((error)=>{
          wx.showToast({
              title: '读取义工任务失败',
              icon:'none'
          })
      })
  },

  onCreate(){
    wx.navigateTo({
      url: '/pages/volunteer/create/createVolunteerTask'
    })
  },

    onRow(e){
        wx.setStorageSync('volunteerTaskId', e.currentTarget.dataset.volunteertaskid)
        wx.navigateTo({
            url: '../detail/volunteerTaskDetail',
        })
    },

    onMyVolunteerApply(){
        wx.navigateTo({
            url: '../applyList/volunteerTaskApplyList'
        })
    },

    onMyVolunteerApplyToJoin(){
        wx.navigateTo({
            url: '../applyJoinList/applyJoinList'
        })
    },

    onComment(){
      wx.navigateTo({
        url: '/pages/volunteer/comment/volunteerList/volunteerList'
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