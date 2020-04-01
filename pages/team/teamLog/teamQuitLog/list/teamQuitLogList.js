// pages/team/teamLog/teamQuitLog/teamQuitLogList.js

import api from '../../../../../api/api.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading: true,
        isEmpty: false,
        pageIndex: 1,
        pageSize: 10,
        teamQuitLogs: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.loadAllData()
    },

    loadAllData() {
        const type = wx.getStorageSync('type')
        console.log(type)
        let params = {
            pageIndex: this.data.pageIndex,
            pageSize: this.data.pageSize
        }
        if (type === 'APPLY') {
            api.apiListTeamQuitLogApply(params).then((res) => {
                console.log(res)
                let isEmpty = false
                if (res.data.teamQuitLogs.length === 0) {
                    isEmpty = true
                }
                this.setData({
                    teamQuitLogs: res.data.teamQuitLogs,
                    isLoading: false,
                    isEmpty
                })
            }).catch((error) => {
                wx.showToast({
                    title: '读取退团申请失败',
                    icon: 'none'
                })
            })
        }
        if (type === 'PROCESS') {
            api.apiListTeamQuitLogProcess(params).then((res) => {
                console.log(res)
                let isEmpty = false
                if (res.data.teamQuitLogs.length === 0) {
                    isEmpty = true
                }
                this.setData({
                    teamQuitLogs: res.data.teamQuitLogs,
                    isLoading: false,
                    isEmpty
                })
            }).catch((error) => {
                wx.showToast({
                    title: '读取退团申请失败',
                    icon: 'none'
                })
            })
        }
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