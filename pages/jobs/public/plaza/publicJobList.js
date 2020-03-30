// pages/jobs/public/plaza/publicJobList.js
import api from '../../../../api/api.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        taskList:[],
        pageIndex:1,
        pageSize:5
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
      api.apiListTaskGrabbingTeam(params).then((res)=>{
        this.setData({
            taskList:res.data.tasks
        })
      }).catch((error)=>{
      })
    },

    onTaskRow(e){
        wx.setStorageSync('taskId', e.currentTarget.dataset.taskid)
        wx.navigateTo({
            url: '../../jobDetail/jobDetail',
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
