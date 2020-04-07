// pages/jobs/myJob/stop/taskStop.js

import api from '../../../../api/api.js'
import tools from '../../../../utils/dateTools.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading:true,
        stop:{},
        stopTime:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadAllData()
    },

    loadAllData(){
        let taskId=wx.getStorageSync('taskId')
        let params={
            taskId
        }
        api.apiGetTaskStop(params).then((res)=>{
            console.log(res)
            let stopTime=tools.momentTime(res.data.taskStop.createTime,'L')
            this.setData({
                stop:res.data.taskStop,
                isLoading:false,
                stopTime
            })
        }).catch((error)=>{
            wx.showToast({
                title: '读取终止任务日志失败',
                icon:'none'
            })
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