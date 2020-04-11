// pages/team/teamLogPage/teamLogPage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        totalNewApplyMember:0,
        totalUnreadProcess:0,
        totalTeamApplyLogMyApply:0,
        totalTeamApplyLogMyTeam:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let params = wx.getStorageSync('params')
        this.setData({
            totalNewApplyMember: params.totalNewApplyMember,
            totalUnreadProcess: params.totalUnreadProcess,
            totalTeamApplyLogMyApply: params.totalTeamApplyLogMyApply,
            totalTeamApplyLogMyTeam: params.totalTeamApplyLogMyTeam
        })
        console.log(this.data)
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