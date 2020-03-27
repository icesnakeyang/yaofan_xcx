// pages/team/teamApplyLogDetail/teamApplyLogDetail.js

import tools from '../../../utils/dateTools.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        teamApplyLog:{},
        createTime:'',
        status:'',
        isManager:false,
        isApply:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadAllData()
    },

    loadAllData(){
        const item = wx.getStorageSync('item')
        let currentUserId=wx.getStorageSync('current_user_id')
        let createTime=tools.momentTime(item.createTime, 'L')
        let status=''
        if(item.status==='PENDING'){
            status='等待通过'
        }
        let isManager=false
        if (item.teamManagerId === currentUserId){
            isManager=true
        }
        let isApply=false
        if (item.applyUserId===currentUserId){
            isApply=true
        }
        this.setData({
            teamApplyLog:item,
            createTime,
            status,
            isManager,
            isApply
        })
        console.log(this.data)
    },

    onCancel(){
        
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