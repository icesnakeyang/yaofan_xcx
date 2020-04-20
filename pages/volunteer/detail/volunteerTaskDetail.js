// pages/volunteer/detail/volunteerTaskDetail.js

import api from '../../../api/api.js'
import tools from '../../../utils/dateTools.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading:true,
        volunteerTask:{},
        createTime:'',
        status:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadAllData()
    },

    loadAllData(){
        let volunteerTaskId = wx.getStorageSync('volunteerTaskId')
        console.log(volunteerTaskId)
        let params={
            volunteerTaskId
        }
        api.apiGetVolunteerTask(params).then((res)=>{
            let createTime=tools.momentTime(res.data.volunteerTask.createTime, 'L')
            let status=''
            if(res.data.volunteerTask.status==='ACTIVE'){
                status='招募中'
            }
            this.setData({
                volunteerTask:res.data.volunteerTask,
                createTime,
                isLoading:false,
                status
            })
            console.log(this.data)

        }).catch((error)=>{
            wx.showToast({
                title: '读取义工任务失败',
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