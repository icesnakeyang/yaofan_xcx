// pages/volunteer/volunteerTaskList/volunteerTaskList.js

import api from '../../../api/api.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading: true,
        isEmpty:true,
        pageIndex: 1,
        pageSize: 10,
        volunteerTaskList: [],
        totalUnreadVolunteerApply:0,
        totalUnreadVolunteerProcess:0

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.loadAllData()
        this.totalVolunteer()
    },

    loadAllData() {
        wx.showLoading({
          title: '加载中...',
        })
        this.setData({
            isLoading:true,
            isEmpty:true
        })
        let params = {
            pageIndex: this.data.pageIndex,
            pageSize: this.data.pageSize
        }
        api.apiListMyVolunteerTask(params).then((res) => {
            let isEmpty=true
            if(res.data.volunteerTasks.length>0){
                isEmpty=false
            }
            this.setData({
                volunteerTaskList: res.data.volunteerTasks,
                isLoading: false,
                isEmpty
            })
            wx.hideLoading()
        }).catch((error) => {
            this.setData({
                isLoading:false
            })
            wx.hideLoading()
            wx.showToast({
                title: '读取义工任务失败',
                icon: 'none'
            })
        })
    },

    totalVolunteer() {
        api.apiTotalMyVolunteer({}).then((res) => {
            this.setData({
                totalVolunteerTasks: res.data.totalVolunteerTasks,
                totalUnreadVolunteerApply: res.data.totalUnreadVolunteerApply,
                totalUnreadVolunteerProcess: res.data.totalUnreadVolunteerProcess

            })
        }).catch((error) => {

        })
    },

    onCreate() {
        let isLogin=wx.getStorageSync('isLogin')
        if(isLogin){
        wx.navigateTo({
            url: '/pages/volunteer/create/createVolunteerTask'
        })
    }else{
        wx.navigateTo({
          url: '../../legacy/wxLogin/wxLogin'
        })
    }
    },

    onRow(e) {
        wx.setStorageSync('volunteerTaskId', e.currentTarget.dataset.volunteertaskid)
        wx.navigateTo({
            url: '../detail/volunteerTaskDetail',
        })
    },

    onMyVolunteerApply() {
        wx.navigateTo({
            url: '../applyList/volunteerTaskApplyList'
        })
    },

    onMyVolunteerApplyToJoin() {
        wx.navigateTo({
            url: '../applyJoinList/applyJoinList'
        })
    },

    onComment() {
        wx.navigateTo({
            url: '/pages/volunteer/comment/volunteerList/volunteerList'
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
        this.totalVolunteer()
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