// pages/team/teamApplyLogList/teamApplyLogList.js

import api from '../../../api/api.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
      pageIndex:1,
      pageSize:5,
      teamApplyLogList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.loadAllData()
    },

    loadAllData(){
      wx.setStorageSync('type', 'JOIN')
      
      let type=wx.getStorageSync('type')
      let params = {
        pageIndex:this.data.pageIndex,
        pageSize:this.data.pageSize
      }
      if (type ==='JOIN'){
        api.apiListTeamApplyLogMyApply(params).then((res)=>{
          console.log(res)
          this.setData({
            teamApplyLogList:res.data.applyTeams
          })
        }).catch((error)=>{
          wx.showToast({
            title: '读取日志失败',
            icon:'none'
          })
        })
      }
    },

    onRow(e){
        console.log(e)
        wx.setStorageSync('item', e.currentTarget.dataset.item)
        wx.navigateTo({
            url: '../teamApplyLogDetail/teamApplyLogDetail',
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