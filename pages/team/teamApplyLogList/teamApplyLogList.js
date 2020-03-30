// pages/team/teamApplyLogList/teamApplyLogList.js

import api from '../../../api/api.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        pageIndex: 1,
        pageSize: 5,
        teamApplyLogList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.loadAllData()
    },

    loadAllData() {
        let type = wx.getStorageSync('type')

        let params = {
            pageIndex: this.data.pageIndex,
            pageSize: this.data.pageSize
        }
        if (type === 'APPLY') {
            api.apiListTeamApplyLogMyApply(params).then((res) => {
                this.setData({
                    teamApplyLogList: res.data.applyTeams
                })
            }).catch((error) => {
                wx.showToast({
                    title: '读取日志失败',
                    icon: 'none'
                })
            })
        } else {
            api.apiListTeamApplyLogApplyUser(params).then((res) => {
                this.setData({
                    teamApplyLogList: res.data.applyTeams
                })
            }).catch((error) => {
                wx.showToast({
                    title: '读取日志失败',
                    icon: 'none'
                })
            })
        }
    },

    onRow(e) {
        const teamApplyLogId=e.currentTarget.dataset.item.teamApplyLogId
        wx.setStorageSync('teamApplyLogId', teamApplyLogId)
        wx.navigateTo({
            url: '../teamApplyLogDetail/teamApplyLogDetail',
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
      let pageIndex=this.data.pageIndex
      if(pageIndex>1){
        pageIndex--
      }
      this.setData({
        pageIndex
      })
      this.loadAllData()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
      let pageIndex=this.data.pageIndex
      pageIndex++
      this.setData({
        pageIndex:pageIndex
      })
      this.loadAllData()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})
