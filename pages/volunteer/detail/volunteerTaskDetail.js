// pages/volunteer/detail/volunteerTaskDetail.js

import api from '../../../api/api.js'
import tools from '../../../utils/dateTools.js'
import Dialog from '../../../vant-weapp/dialog/dialog.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading: true,
        volunteerTask: {},
        createTime: '',
        status: '',
        canApply: false,
        canComment: false,
        isAgree: false,
        canStop: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadAllData()
    },

    loadAllData() {
        let volunteerTaskId = wx.getStorageSync('volunteerTaskId')
        let params = {
            volunteerTaskId
        }
        api.apiGetVolunteerTask(params).then((res) => {
            let createTime = tools.momentTime(res.data.volunteerTask.createTime, 'L')
            let status = ''
            let canApply = false
            let canComment = false
            let isAgree = false
            let canStop = false
            let currentUserId = wx.getStorageSync('current_user_id')

            if (res.data.volunteerTask.createUserId === currentUserId) {
                //甲方
                canComment = true
                if (res.data.volunteerTask.status === 'ACTIVE') {
                    canStop = true
                    status = '招募中'
                } else {
                    if (res.data.volunteerTask.status === 'STOP') {
                        //已停止
                        status = '已停止'
                    }
                }
            } else {
                //乙方
                if (res.data.volunteerTask.status === 'ACTIVE') {
                    //招募中
                    status = '招募中'
                    canApply = true
                } else {
                    if (res.data.volunteerTask.status === 'STOP') {
                        //已停止
                        status = '已停止'
                    }
                }
            }
            if (res.data.isAgree) {
                isAgree = true
            }
            this.setData({
                volunteerTask: res.data.volunteerTask,
                createTime,
                isLoading: false,
                status,
                canApply,
                canComment,
                isAgree,
                canStop
            })

        }).catch((error) => {
            wx.showToast({
                title: '读取义工任务失败',
                icon: 'none'
            })
        })
    },

    onApply() {
        wx.setStorageSync('volunteerTaskId', this.data.volunteerTask.volunteerTaskId)
        let isLogin = wx.getStorageSync('isLogin')
        if (isLogin) {
            wx.navigateTo({
                url: '../apply/applyVolunteerTask'
            })
        }else{
            wx.navigateTo({
              url: '../../legacy/wxLogin/wxLogin',
            })
        }
    },

    onComment() {
        wx.setStorageSync('volunteerTaskId', this.data.volunteerTask.volunteerTaskId)
        wx.navigateTo({
            url: '../comment/volunteerList/volunteerList'
        })
    },

    onStop() {
        Dialog.confirm({
            title: '确认停止',
            message: '停止招募后用户将不能再申请该任务，但您仍可以继续在我的任务里评价该任务的义工'
        }).then(() => {
            // on confirm
            let params = {
                volunteerTaskId: this.data.volunteerTask.volunteerTaskId
            }

            api.apiStopVolunteerTask(params).then((res) => {
                wx.showToast({
                    title: '已停止义工招募'
                })
                this.loadAllData()
            }).catch((error) => {
                wx.showToast({
                    title: '停止失败',
                    icon: 'none'
                })
            })
        }).catch(() => {
            // on cancel
        });
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