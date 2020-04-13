// pages/team/teamLogPage/teamLogPage.js

import api from '../../../../api/api.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading:true,
        totalNewApplyMember:0,
        totalUnreadProcess:0,
        totalTeamApplyLogMyApply:0,
        totalTeamApplyLogMyTeam:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.loadAllData()
    },

    loadAllData(){
        api.apiTotalMyTeamLog({}).then((res) => {
            let totalNewApplyMember = 0
            let totalUnreadProcess = 0
            let totalTeamApplyLogMyApply = 0
            let totalTeamApplyLogMyTeam = 0
            if (res.data.totalNewApplyMember > 0) {
                totalNewApplyMember = res.data.totalNewApplyMember
            }
            if (res.data.totalUnreadProcess > 0) {
                totalUnreadProcess = res.data.totalUnreadProcess
            }
            if (res.data.totalTeamApplyLogMyTeam > 0) {
                totalTeamApplyLogMyTeam = res.data.totalTeamApplyLogMyTeam
            }
            if (res.data.totalTeamApplyLogMyApply > 0) {
                totalTeamApplyLogMyApply = res.data.totalTeamApplyLogMyApply
            }
            this.setData({
                totalNewApplyMember,
                totalUnreadProcess,
                totalTeamApplyLogMyApply,
                totalTeamApplyLogMyTeam,
                isLoading:false
            })
        }).catch((error) => {
            wx.showToast({
                title: '统计错误',
                icon: 'none'
            })
        })
    },

    onTeamApplyLog() {
        wx.setStorageSync('type', 'APPLY')
        wx.navigateTo({
            url: '/pages/team/teamLog/teamApplyLog/list/teamApplyLogList',
        })
    },

    /**
     * 申请加入我的团队的申请列表
     */
    onTeamApplyMemberLog() {
        wx.setStorageSync('type', 'PROCESS')
        wx.navigateTo({
            url: '/pages/team/teamLog/teamApplyLog/list/teamApplyLogList',
        })
    },

    onTeamQuitLog() {
        wx.setStorageSync('type', 'APPLY')
        wx.navigateTo({
            url: '/pages/team/teamLog/teamQuitLog/list/teamQuitLogList',
        })
    },

  onTeamQuitLogMember(){
    wx.setStorageSync('type', 'PROCESS')
    wx.navigateTo({
      url: '/pages/team/teamLog/teamQuitLog/list/teamQuitLogList',
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
        this.loadAllData()

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
