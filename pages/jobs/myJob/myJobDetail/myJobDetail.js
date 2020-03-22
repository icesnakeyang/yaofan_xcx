// pages/jobs/myJob/myJobDetail/myJobDetail.js

import api from '../../../../api/api.js'
import tools from '../../../../utils/dateTools.js'
import Dialog from '.././../../../vant-weapp/dialog/dialog.js';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        taskId: '',
        task: {},
        createTime: '',
        isBidding: false,
        isLoaing:true
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
            this.setData({
                isLoaing:false
            })
        }).catch((error) => {
            wx.showToast({
                title: '读取任务信息失败',
                icon: 'none'
            })
        })
    },

    editTask(){

    },

    deleteTask(){
        Dialog.confirm({
            title: '确认删除',
            message: '确定要删除该任务吗？'
        }).then(() => {
            // on confirm
        }).catch(() => {
            // on cancel
        });
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
