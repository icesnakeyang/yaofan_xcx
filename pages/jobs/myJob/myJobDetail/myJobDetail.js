// pages/jobs/myJob/myJobDetail/myJobDetail.js

import api from '../../../../api/api.js'
import tools from '../../../../utils/dateTools.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        taskId: '',
        task: {},
        createTime: '',
        isBidding: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let taskId = wx.getStorageSync('taskId')
        if (taskId) {
            this.setData({
                taskId
            })
        }
        this.loadAllData()
    },

    loadAllData() {
        let params = {
            taskId: this.data.taskId
        }
        api.apiGetTaskByTaskId(params).then((res) => {
            console.log(res)
            let createTime = tools.momentTime(res.data.task.createTime, 'S')
            let status = res.data.task.status
            let isBidding=false
            if (status == 'BIDDING') {
                isBidding = true
                status='等待抢单'
            }
            this.setData({
                task: res.data.task,
                createTime,
                isBidding,
                status
            })
            console.log(this.data)
        }).catch((error) => {
            wx.showToast({
                title: '读取任务信息失败',
                icon: 'none'
            })
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